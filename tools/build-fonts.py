#!/usr/bin/env python3
"""
重新生成 assets/fonts/ 里的字体子集。

什么时候需要跑它：
    改了题目、城市介绍、按钮文字之后，如果出现了新的汉字，
    那个字会回退到系统字体（页面不会坏，只是风格略有不统一）。
    想让新字也用上对应字体，就跑一次这个脚本。

用法：
    pip3 install fonttools brotli
    python3 tools/build-fonts.py

脚本会自动：
    1. 下载字体源文件到 tools/fonts/（只需下载一次）
    2. 从 index.html / script.js / preview.html 里统计用到的字
    3. 按每个字体实际负责的文案分别做子集
    4. 输出到 assets/fonts/*.woff2

字体授权：均为 SIL Open Font License 1.1（可免费商用）。
"""

import os
import re
import subprocess
import sys
import urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC_DIR = os.path.join(ROOT, "tools", "fonts")
OUT_DIR = os.path.join(ROOT, "assets", "fonts")

# 字体源文件（Google Fonts 官方仓库）
FONTS = {
    "MaShanZheng": (
        "https://raw.githubusercontent.com/google/fonts/main/ofl/"
        "mashanzheng/MaShanZheng-Regular.ttf"
    ),
    "ZCOOLXiaoWei": (
        "https://raw.githubusercontent.com/google/fonts/main/ofl/"
        "zcoolxiaowei/ZCOOLXiaoWei-Regular.ttf"
    ),
    "NotoSerifSC": (
        "https://raw.githubusercontent.com/google/fonts/main/ofl/"
        "notoserifsc/NotoSerifSC%5Bwght%5D.ttf"
    ),
    "NotoSansSC": (
        "https://raw.githubusercontent.com/google/fonts/main/ofl/"
        "notosanssc/NotoSansSC%5Bwght%5D.ttf"
    ),
}

# 基础字符：数字、拉丁字母、常用标点
BASIC = (
    " 0123456789"
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    "abcdefghijklmnopqrstuvwxyz"
    ".,:;!?()[]{}<>/\\|-_+=*&%$#@'\"`~^"
    "，。、；：！？（）【】《》〈〉「」『』“”‘’…—–·×÷°±§¥€£　・～～"
)


def read(name):
    with open(os.path.join(ROOT, name), encoding="utf-8") as f:
        return f.read()


def download_sources():
    os.makedirs(SRC_DIR, exist_ok=True)

    for name, url in FONTS.items():
        path = os.path.join(SRC_DIR, name + ".ttf")

        if os.path.exists(path) and os.path.getsize(path) > 1000:
            print("已存在，跳过下载:", name)
            continue

        print("下载字体源文件:", name, "(比较大，请稍候)")
        urllib.request.urlretrieve(url, path)


def build_charsets():
    html = read("index.html")
    js = read("script.js")

    # 主标题 + 城市名 —— 用 Ma Shan Zheng（手写体）
    h1 = re.search(r"<h1>(.*?)</h1>", html, re.S)
    h1 = re.sub(r"<[^>]+>", "", h1.group(1)) if h1 else ""
    names = re.findall(r'name:\s*"([^"]+)"', js)
    display = set(h1) | set("".join(names)) | set(BASIC)

    # 小标签 —— 用 Noto Sans SC
    labels = [
        "问题 / 11",
        "你的旅行人格",
        "地标",
        "开始测试",
        "下一题",
        "返回首页 · 重新测试",
        "Travel Personality Test",
        "城市图片来自 Wikimedia Commons（CC0 / CC BY / CC BY-SA），"
        "作者与许可证见 assets/cities/sources.json",
    ]
    labels += re.findall(r'keywords:\s*"([^"]+)"', js)
    label = set("".join(labels)) | set(BASIC)

    # 其余（题干、正文、城市介绍）—— 用整站字符集，宁多勿缺
    full = set(html) | set(js) | set(BASIC)

    return {"MaShanZheng": display, "ZCOOLXiaoWei": full, "NotoSerifSC": full, "NotoSansSC": label}


def subset():
    charsets = build_charsets()
    os.makedirs(OUT_DIR, exist_ok=True)

    for name, chars in charsets.items():
        src = os.path.join(SRC_DIR, name + ".ttf")
        out = os.path.join(OUT_DIR, name + ".woff2")
        text_file = os.path.join(SRC_DIR, name + ".chars.txt")

        with open(text_file, "w", encoding="utf-8") as f:
            f.write("".join(sorted(chars)))

        subprocess.run(
            [
                sys.executable, "-m", "fontTools.subset", src,
                "--text-file=" + text_file,
                "--output-file=" + out,
                "--flavor=woff2",
                "--layout-features=*",
                "--no-hinting",
            ],
            check=True,
        )

        print("%-14s %5d 字 -> %6d KB" % (name, len(chars), os.path.getsize(out) // 1024))


if __name__ == "__main__":
    download_sources()
    subset()
    print("\n完成。记得把 sw.js 里的 CACHE_VERSION 加一，让已安装的版本更新缓存。")
