import { Container } from "@/components/ui/container";

interface CardProps {
  children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <section className="py-12">
      <Container className="grid md:grid-cols-[35fr_65fr] gap-4 lg:gap-8">{children}</Container>
    </section>
  );
}
