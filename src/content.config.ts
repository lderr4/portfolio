import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

export const collections = {
	projects: defineCollection({
		// Load Markdown files in the src/content/work directory.
		loader: glob({ base: './src/content/projects', pattern: '**/*.md', }),
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
			github_link: z.string(),
			project_link: z.string()
		}),
	}),

	blogs: defineCollection({
		
		loader: glob({ base: './src/content/blogs', pattern: '**/*.md', }),
		schema: z.object({
			title: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
			github_link: z.string(),
			article_link: z.string()
		}),
	}),
};



/*
title: 4th Down Prediction
publishDate: 2024-011-29 00:00:00
img: /assets/4th-down-prediction.png
img_alt: Pearls of silky soft white cotton, bubble up under vibrant lighting
description: A live web application that uses machine learning models to predict 4th down outcomes. 
github_link: https://github.com/lderr4/NFL-4th-Down-Prediction-Algorithm
project_link: https://4th-down-prediction.com
tags:
  - Predictive Modelling
  - Streamlit
  - AWS
*/
