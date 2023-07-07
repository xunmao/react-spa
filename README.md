# react-spa

此项目用于学习和尝试 React ( https://react.docschina.org ) 框架的各种功能。  
此项目属于 React 框架学习系列的第二季，主要学习 React 脚手架等内容。

## 准备工作

1. 通过 React 脚手架在本地创建工程，工程名为`react-spa`
1. 在 GitHub 上创建仓库。为了避免脚手架生成的文件与仓库中的初始文件发生冲突，这里创建一个只带有`LICENSE`文件的仓库
1. 将本地代码推送至 GitHub 仓库（可以参考 [以下详细步骤](#将本地代码推送至-github-仓库的详细步骤) ）

## 各种插件

推荐使用以下插件来提升效率：
1. VS Code 插件：ES7+ React/Redux/React-Native snippets ( https://github.com/ults-io/vscode-react-javascript-snippets )
1. Chrome 插件：FeHelper ( https://github.com/zxlie/FeHelper ) 主要用于美化 JSON 格式文件

## 内容提要

[TODO]
1. [01-脚手架自带文件](01-脚手架自带文件/README.md)
1. [02-Hello-React](02_src_hello_react/README.md)
1. [03-Todo-List](03_src_todo_list/README.md)
1. [04-Setup-Proxy](04_src_setup_proxy/README.md)
1. [05-GitHub-Search](05_src_github_search/README.md)

以`02-Hello-React`为例，将文件夹名称`02_src_hello_react`改为`src`即可确认该案例的实际效果。  
另外，如果确认的是02至04这几个案例，还需要将`public/index.html`中引入的 Bootstrap 注释掉

## 参考信息

### 将本地代码推送至 GitHub 仓库的详细步骤

1. 设置远程分支
```sh
git remote add origin git@github.com:xunmao/react-spa.git
```
2. 更改分支名称（可选）
```sh
git branch -M main
```
3. 确认操作结果
```sh
git remote -v
(output)
origin  git@github.com:xunmao/react-spa.git (fetch)
origin  git@github.com:xunmao/react-spa.git (push)
```
4. 设置上游分支
```sh
git branch --set-upstream-to=origin/main main
```
5. 如果在GitHub上创建的是空白仓库，可以跳过第6步
6. 如果在GitHub上创建的仓库中包含初始文件，需要在本地进行合并（变基）
```sh
git pull --rebase
```
7. 将本地代码提交至GitHub
```sh
git push -u origin main
```
