import { model, Schema } from "mongoose";

export type Article = {
  title: string;
  author: string;
  body: string;
};

const articleSchema = new Schema<Article>({
  title: { type: String, required: true},
  author: { type: String, required: true},
  body: { type: String, required: true},
});

export const Article = model("Article", articleSchema);
