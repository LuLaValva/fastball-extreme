import fs from "fs";
import { TileType } from "../../components/game/game.marko";

declare module "@marko/run" {
  interface Context {
    tiles: TileType[][];
  }
}

const typeMap = {
  " ": TileType.Empty,
  T: TileType.Ground,
  O: TileType.Start,
  v: TileType.Fire,
  Y: TileType.Goal,
  "(": TileType.DirectLeft,
  ")": TileType.DirectRight,
  _: TileType.Spring,
  "<": TileType.SpeedLeft,
  ">": TileType.SpeedRight,
  ".": TileType.Collectible,
};

export default (async function (context, next) {
  try {
    const file = fs.readFileSync(
      `${import.meta.dirname}/levels/${context.params.id}.txt`,
      "utf8",
    );
    context.tiles = file
      .substring(0, file.length - 1)
      .split("|\n")
      .map((line) =>
        line.split("").map((char) => typeMap[char as keyof typeof typeMap]),
      );
  } catch (e) {
    return Response.redirect(new URL("/levels", context.url));
  }
} satisfies MarkoRun.Handler);
