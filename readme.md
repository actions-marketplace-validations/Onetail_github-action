# Github Action 示範

這是一個示例，演示如何使用github action

## 列表

- Github MarketPlace

## 引用

> [教學](https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action)

## 使用

```
name: Test

on:
  push:
    branches:
    - master

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: Onetail/github-action@v1.0.1
    - run: true

```



