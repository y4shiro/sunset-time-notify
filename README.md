# Sunset Time Notify

任意の日時 / 地点の日没時刻を表示したり、Push 通知などで日没が近づくと通知する Web サービス

## 開発環境

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

## 必要な環境変数

開発サーバ / 本番共に必要

```vim
NEXT_PUBLIC_MAPBOX_API_KEY=<YOUR_MAPBOX_API_KEY>
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=<YOUR_GOOGLE_ANALYTICS_ID>
```

## 開発サーバ起動方法

```bash
npm run dev
```
