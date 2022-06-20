// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from "fs";
import path from "path";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  console.log("req", req.query);

  // TODO: implement recursive to read the the folders to generate the tabs by the folders
  const dirRelativeToPublicFolder = "assets/obol-ecosystem/backers";  
  const dir = path.resolve("./public", dirRelativeToPublicFolder);

  const folders = fs.readdirSync(dir);
  // [backers, teams]
  folders.shift();
  const folderList = folders.map((name) =>
    path.join("/", dirRelativeToPublicFolder, name)
  );

  console.log(folderList);

  const tabs = folderList.map((folder: any) => {
    const filenames = fs.readdirSync(path.resolve("./public", folder));
    filenames.shift();
    console.log(filenames);
    // backers: [coinbase, test, test2....]
    const images = filenames.map((name: any) => ({
      heading: name.split("/").at(-1).split(".")[0],
      image: path.join("/", dirRelativeToPublicFolder, name),
    }));

    return { tab: folder, items: images };
  });

  res.statusCode = 200;
  res.json(tabs);
}
