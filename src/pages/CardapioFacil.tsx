import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const CardapioFacil = () => {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Navigation */}
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="group">
              <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={18} />
              Voltar para a página inicial
            </Button>
          </Link>
        </div>

        {/* Hero */}
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Cardápio Fácil: Alimentação descomplicada com a força da IA
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Planejamento de refeições automatizado, saudável e do jeitinho da sua família
          </p>
          
          <div className="bg-muted/30 rounded-xl p-8 mb-12">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              O Cardápio Fácil é um serviço digital que envia semanalmente planos de refeições personalizados direto no WhatsApp. 
              Sem precisar baixar apps, fazer login ou enfrentar longas pesquisas, as famílias recebem sugestões de almoço e jantar 
              alinhadas ao seu perfil alimentar, além de listas de compras organizadas por categoria. É a tecnologia a serviço da 
              praticidade e do bem-estar na rotina alimentar do lar.
            </p>
            
            <p className="text-lg text-foreground leading-relaxed">
              Criado para mães, pais, profissionais ocupados e famílias com restrições alimentares, o Cardápio Fácil nasceu para 
              resolver um problema comum: o estresse e a fadiga de decidir o que comer todos os dias, sem repetir e sem sair da linha.
            </p>
          </div>
        </div>

        {/* How it started */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">Como tudo começou</h2>
          
          <p className="text-lg text-foreground leading-relaxed mb-6">
            A ideia do Cardápio Fácil surgiu de uma escuta sensível às dores reais das famílias brasileiras — especialmente de mães 
            com bebês iniciando a introdução alimentar, famílias com restrições como vegetarianismo ou intolerância à lactose, e 
            profissionais que vivem na correria.
          </p>
          
          <p className="text-lg text-foreground leading-relaxed">
            O desafio era claro: como oferecer variedade, equilíbrio e praticidade sem exigir tempo ou esforço extra? A resposta 
            veio com uma proposta ousada: aplicar inteligência artificial em todas as etapas do processo, mantendo o toque humano 
            e cultural da culinária brasileira.
          </p>
        </div>

        {/* AI Integration */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">Inteligência artificial do começo ao fim</h2>
          
          <p className="text-lg text-foreground leading-relaxed mb-8">
            A inovação do Cardápio Fácil está na forma como a IA foi integrada a cada fase do projeto. Mais do que uma ferramenta, 
            a inteligência artificial se tornou parte do time:
          </p>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-primary mb-3">Pesquisa guiada por dados reais</h3>
              <p className="text-foreground leading-relaxed">
                Utilizamos IA para analisar padrões de comportamento alimentar, identificar necessidades específicas por perfil e 
                construir personas realistas com base em dados e escuta ativa.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-primary mb-3">Cardápios realmente personalizados</h3>
              <p className="text-foreground leading-relaxed mb-4">
                O algoritmo gera combinações únicas de receitas considerando:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground">
                <li>Restrições alimentares (como dietas vegetarianas ou lactose-free)</li>
                <li>Faixa etária das crianças (com atenção especial à introdução alimentar)</li>
                <li>Preferências culturais e ingredientes sazonais</li>
              </ul>
              <p className="text-foreground leading-relaxed mt-4">
                Tudo com foco em refeições simples, saudáveis e com a cara do Brasil.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-primary mb-3">Textos e mensagens naturais</h3>
              <p className="text-foreground leading-relaxed">
                Os conteúdos enviados por WhatsApp — desde receitas até a lista de compras — são elaborados com o auxílio de IA 
                generativa, garantindo clareza, acolhimento e linguagem acessível.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-primary mb-3">Automatização e escuta ativa</h3>
              <p className="text-foreground leading-relaxed">
                A entrega semanal, o monitoramento de abertura de mensagens, e a coleta de feedbacks são todos automatizados. 
                A IA analisa essas interações para adaptar continuamente os cardápios às preferências e necessidades dos usuários.
              </p>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">Resultados práticos para o dia a dia</h2>
          
          <p className="text-lg text-foreground leading-relaxed mb-8">
            O impacto é sentido logo na primeira semana:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-medium border border-border">
              <div className="text-2xl mb-4">🕒</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Mais tempo livre</h3>
              <p className="text-muted-foreground">
                O planejamento de refeições e a lista de compras chegam prontinhos.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-medium border border-border">
              <div className="text-2xl mb-4">🍽️</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Refeições equilibradas e variadas</h3>
              <p className="text-muted-foreground">
                Baseadas em recomendações nutricionais e ingredientes locais.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-medium border border-border">
              <div className="text-2xl mb-4">📱</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Zero fricção digital</h3>
              <p className="text-muted-foreground">
                Tudo funciona direto no WhatsApp, com uma interface amigável.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-medium border border-border">
              <div className="text-2xl mb-4">🔁</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Reuso e adaptação</h3>
              <p className="text-muted-foreground">
                O usuário pode guardar receitas favoritas e pedir substituições com um toque.
              </p>
            </div>
          </div>
        </div>

        {/* CraftCode */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">Um projeto da CraftCode</h2>
          
          <p className="text-lg text-foreground leading-relaxed">
            O Cardápio Fácil é uma criação da CraftCode, empresa que transforma ideias em soluções digitais com uso responsável 
            de inteligência artificial. Nossa missão é clara: aplicar tecnologia de ponta para resolver problemas reais, com ética, 
            empatia e impacto positivo.
          </p>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto text-center bg-gradient-primary rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Quer conhecer o Cardápio Fácil?</h2>
          <p className="text-xl mb-8">
            Descubra como a IA pode facilitar sua alimentação sem complicar sua rotina.
          </p>
          <Button 
            variant="secondary" 
            size="lg"
            className="group"
            onClick={() => window.open('https://cardapiofacil.online', '_blank')}
          >
            Conheça o Cardápio Fácil
            <ExternalLink className="ml-2 group-hover:scale-110 transition-transform" size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardapioFacil;
