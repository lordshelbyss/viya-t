import { redirect } from "next/navigation";

export const metadata = {
  title: "Collections — Viya T Organic Perfumery",
  description:
    "Explore Sabae — our debut collection of eight exquisite organic fragrances. A little bit of everything.",
};

export default function CollectionsPage() {
  redirect("/collections/sabae");
}
