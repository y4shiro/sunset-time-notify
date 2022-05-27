# Sunset Time Notify

sunset-time-notify.y4shiro.net

任意地点の日の出 / 日の入時刻を表示したり、Push 通知で日没が近づくと通知する Web サービス

## Features

- 任意地点の日の出 / 日の入時刻を表示
- 日の出 / 日の入時刻の算出に標高を考慮しているので、高知や高山でも誤差が少ない
- 日の出 / 日の入までの残り時間をカウントダウン表示
- レスポンシブデザインなので PC / スマホどちらでも利用可能

## 今後実装予定の機能

- 日の出 / 日の入時刻の 30 分前などに Push 通知を送る
- 複数地点の日の出 / 日の入時刻をリスト表示

## 開発環境 / ライブラリ

- macOS Monterey 12.3.1
- Node.js 16.13.2
- React 17.0.2
- Next.js 12.1.0
- TypeScript 4.6.2
- Recoil 0.7.2
- ESLint / Prettier
- Jest / React Testing Library
- Chakra UI
- date-fns
- [mourner / suncalc](https://github.com/mourner/suncalc) (日の出日の入時刻計算ライブラリ)

## 利用した外部サービス

- Mapbox
- Google Analytics 4
- Vercel (ホスティング)

## 環境変数

開発サーバ / 本番共に必要

```vim
NEXT_PUBLIC_MAPBOX_API_KEY=<YOUR_MAPBOX_API_KEY>
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=<YOUR_GOOGLE_ANALYTICS_ID>
```

## 開発サーバ起動方法

```bash
npm run dev
```
