import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const personne = defineCollection({
  loader: glob({ base: "src/data/personne", pattern: "**/*.md" }),
  schema: z.object({
    nom: z.string(),
    lieuNaissance: z.string(),
    dateNaissance: z.date(),
    dateDeces: z.date().optional(),
    nationalite: z.string(),
    profession: z
      .array(
        z.enum([
          "acteur",
          "actrice",
          "réalisateur",
          "scénariste",
          "producteur",
          "compositeur",
          "monteur",
          "directeur de la photographie",
          "costumier",
          "décorateur",
          "maquilleur",
          "effets spéciaux",
          "autre",
        ])
      )
      .optional(),
  }),
});

const film = defineCollection({
  loader: glob({ base: "src/data/film", pattern: "**/*.md" }),
  schema: z.object({
    titre: z.string(),
    dateSortie: z.date(),
  }),
})

export const collections = { personne, film };
