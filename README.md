# Fastball EXTREME

## Running Locally

```
npm i
npm run dev
```

## Making a Level

All levels are in `src/routes/level.$id/levels/`.

Level format:

| Symbol | Meaning                  |
| :----: | :----------------------- |
|  `O`   | Start Position (ball)    |
|  `T`   | Ground Tile              |
|  `v`   | Spikes                   |
|  `(`   | Change Direction (left)  |
|  `)`   | Change Direction (right) |
|  `_`   | Spring                   |

All lines must be the same length, and end with `|`.

Example level:

```
O               |
TTTvvTTT        |
  TTTT          |
                |
                |
Y               |
TTTTT          (|
      TTTT  TTTT|
```
