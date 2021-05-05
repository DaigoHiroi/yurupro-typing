TOEIC TYPINGアプリを作成
フロントエンド
react.js
Next.js
TypeScript
tailwindcss
MaterialUI

英単語はコースごとにマスタを持ちたい。
簡単に修正できる仕組みが欲しい。
まとめて編集する場合はcsvファイルとかでできると嬉しいかも.
ゆくゆくは、ユーザーがタイピングする単語を決めて、プレイできると面白いかも。


参考サイト
next.js公式
https://nextjs-ja-translation-docs.vercel.app/docs/getting-started
nextにtypescript tailwindcssを導入する。とても参考になった。
https://qiita.com/notakaos/items/36613850dbfc351b3735
ヘッダーメニューまでまとめて更新されてしまう問題を解決するために参考
ヘッダーなど、常に表示していたいコンポーネントは_app.tsxに記述。
https://www.imatomix.com/imatomix/notes/1591872503
無料コンポーネント集
https://tailwindtemplates.io/cards/

デスクトップで、
npx create-next-app
npm install next react react-dom

ページはpagesをルートにする。

リンクは以下のように記述

画像は、puglicフォルダをルートにする。
<img src="/images_1/logo.svg" alt="" className="logo"/>

typescriptの導入
touch tsconfig.json
npm install --save-dev typescript @types/react @types/node
npm run dev


tailwindcssを導入
npm install tailwindcss@latest postcss@latest autoprefixer@latest
の後に、
npx tailwindcss init
でconfigファイルを作成
tailwind.confin.jsを編集。

navBarの導入に参考になったサイト
https://dev.to/andrewespejo/how-to-design-a-simple-and-beautiful-navbar-using-nextjs-and-tailwindcss-26p1

tailwinds公式
色とか
https://tailwindcss.com/docs/background-color


簡単プログレスバー導入
参考サイト
https://qiita.com/kanye__east/items/66680f2c6a5929126ebd

npm install nextjs-progressbar





----してない（したい）
materialUIをインストール
公式
https://next.material-ui.com/getting-started/installation/
youtube動画
https://www.youtube.com/watch?v=PMOiBn-dg6E

npm install @material-ui/core@next @emotion/react @emotion/styled
npm install @material-ui/icons

事前設定
公式
https://next.material-ui.com/guides/server-rendering/#main-content


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
