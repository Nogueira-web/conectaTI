import { createFileRoute } from "@tanstack/react-router";
import {
  Server, Network, ShieldCheck, Cpu, HardDrive, Wifi, Cloud, Terminal,
  Headphones, Wrench, Database, Lock, Award, TrendingUp, GraduationCap,
  Lightbulb, Globe2, Mail, MapPin, Phone, Github, Linkedin, ChevronDown,
  Monitor, Router as RouterIcon, Settings, Users, Briefcase, BookOpen,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ConectaTI — Carreira em Suporte Técnico e Infraestrutura de TI" },
      { name: "description", content: "Tudo sobre a carreira em Suporte Técnico e Infraestrutura de TI: áreas, ferramentas, certificações, salários, tendências e ODS 9." },
      { property: "og:title", content: "ConectaTI — Carreira em Suporte Técnico e Infraestrutura de TI" },
      { property: "og:description", content: "Guia acadêmico e profissional sobre a carreira em Suporte Técnico e Infraestrutura de TI." },
    ],
  }),
  component: Index,
});

const nav = [
  { href: "#sobre", label: "Sobre" },
  { href: "#areas", label: "Áreas" },
  { href: "#tecnologias", label: "Tecnologias" },
  { href: "#certificacoes", label: "Certificações" },
  { href: "#mercado", label: "Mercado" },
  { href: "#tendencias", label: "Tendências" },
  { href: "#ods", label: "ODS 9" },
  { href: "#faq", label: "FAQ" },
  { href: "#equipe", label: "Equipe" },
  { href: "#contato", label: "Contato" },
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 glass border-b border-border/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <div className="size-9 rounded-lg bg-gradient-primary grid place-items-center shadow-glow group-hover:scale-105 transition-transform">
            <Network className="size-5 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-lg">Conecta<span className="text-gradient">TI</span></span>
        </a>
        <nav className="hidden lg:flex items-center gap-6 text-sm text-muted-foreground">
          {nav.map(n => (
            <a key={n.href} href={n.href} className="relative hover:text-foreground transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gradient-primary after:transition-all hover:after:w-full">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="#contato" className="hidden sm:inline-flex shimmer items-center gap-2 px-4 py-2 rounded-md bg-gradient-primary text-primary-foreground text-sm font-medium hover:shadow-glow hover:-translate-y-0.5 transition-all">
            Fale conosco
          </a>
          <button
            type="button"
            aria-label="Abrir menu"
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
            className="lg:hidden inline-flex items-center justify-center size-10 rounded-md border border-border bg-secondary/50 hover:bg-secondary transition-colors"
          >
            <span className="relative block w-5 h-3.5">
              <span className={`absolute left-0 top-0 h-0.5 w-5 bg-foreground transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`} />
              <span className={`absolute left-0 top-1.5 h-0.5 w-5 bg-foreground transition-opacity ${open ? "opacity-0" : "opacity-100"}`} />
              <span className={`absolute left-0 top-3 h-0.5 w-5 bg-foreground transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>
      <div className={`lg:hidden overflow-hidden border-t border-border/60 transition-[max-height,opacity] duration-300 ${open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"}`}>
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 py-4 grid grid-cols-2 gap-2">
          {nav.map(n => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="px-3 py-2.5 rounded-md text-sm border border-border/60 bg-secondary/30 hover:bg-secondary hover:border-primary/50 hover:text-primary transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-28 overflow-hidden bg-hero">
      {/* Tech background layers */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,oklch(0.72_0.18_235/0.18),transparent_60%)]" />
      <div className="absolute inset-0 pointer-events-none opacity-[0.18] mix-blend-screen [background-image:linear-gradient(transparent_0%,transparent_calc(100%-1px),oklch(0.85_0.18_195/0.5)_100%)] [background-size:100%_3px]" />

      {/* Floating orbs */}
      <div aria-hidden className="absolute -top-24 -right-24 size-[28rem] rounded-full bg-primary/25 blur-[120px] animate-pulse" />
      <div aria-hidden className="absolute top-1/3 -left-24 size-[24rem] rounded-full bg-accent/25 blur-[120px] animate-pulse [animation-duration:6s]" />


      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-1 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/60 border border-border text-xs font-mono text-muted-foreground mb-6 backdrop-blur">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75 animate-ping" />
                <span className="relative inline-flex size-2 rounded-full bg-cyan" />
              </span>
              projeto-universitário/conecta-ti
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              A carreira que <span className="text-gradient">conecta</span>
              <br className="hidden sm:block" /> o mundo da tecnologia
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Suporte Técnico e Infraestrutura de TI — a base invisível que mantém
              empresas, redes e pessoas conectadas <span className="text-foreground font-medium">24 horas por dia</span>.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#sobre" className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:shadow-[0_20px_60px_-10px_oklch(0.72_0.18_235/0.7)] hover:-translate-y-0.5 transition-all">
                <span className="absolute inset-0 rounded-lg bg-gradient-primary opacity-0 group-hover:opacity-100 blur-md transition-opacity -z-10" />
                Explorar Carreira
                <ChevronDown className="size-4 group-hover:translate-y-0.5 transition-transform" />
              </a>
              <a href="#certificacoes" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-border bg-secondary/40 hover:bg-secondary hover:border-primary/40 transition font-medium">
                Ver certificações
              </a>
            </div>
            <dl className="mt-14 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl">
              {[
                { k: "+90%", v: "demanda em alta" },
                { k: "12", v: "áreas de atuação" },
                { k: "24/7", v: "operação contínua" },
              ].map(s => (
                <div key={s.v} className="card-tech p-5 sm:p-6 text-center sm:text-left">
                  <dt className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gradient leading-none">{s.k}</dt>
                  <dd className="text-[11px] sm:text-xs text-muted-foreground mt-2 uppercase tracking-wider">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ tag, title, desc }: { tag: string; title: string; desc?: string }) {
  return (
    <div className="max-w-3xl mb-12">
      <div className="text-xs font-mono uppercase tracking-widest text-primary mb-3">// {tag}</div>
      <h2 className="text-3xl sm:text-4xl font-bold">{title}</h2>
      {desc && <p className="mt-4 text-muted-foreground text-lg">{desc}</p>}
    </div>
  );
}

function Sobre() {
  const pillars = [
    { icon: Headphones, title: "Suporte ao Usuário", text: "Atendimento N1, N2 e N3, troubleshooting e resolução de incidentes em hardware e software com foco em experiência do usuário." },
    { icon: Server, title: "Infraestrutura Robusta", text: "Servidores físicos e virtuais, storage, virtualização, alta disponibilidade e planos de contingência sólidos." },
    { icon: ShieldCheck, title: "Segurança & SLA", text: "Boas práticas de cibersegurança, controle de acesso e cumprimento rigoroso de acordos de nível de serviço." },
  ];
  return (
    <section id="sobre" className="relative py-28">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          tag="sobre a profissão"
          title="O alicerce invisível da tecnologia"
          desc="O profissional de Suporte Técnico e Infraestrutura de TI projeta, mantém e protege os sistemas que sustentam toda operação digital — de pequenas empresas a data centers globais."
        />

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-2 card-tech p-8 relative overflow-hidden">
            <div className="absolute -top-16 -right-16 size-48 rounded-full bg-primary/15 blur-3xl" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs font-mono text-primary mb-5">
                <Cpu className="size-3.5" /> profissão essencial
              </div>
              <h3 className="text-2xl font-bold leading-snug">
                Quem mantém o mundo digital <span className="text-gradient">funcionando</span>?
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                São os profissionais de Suporte e Infraestrutura. Eles garantem que servidores, redes,
                aplicações e usuários estejam sempre conectados, seguros e produtivos — 24 horas por dia,
                7 dias por semana.
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {[
                  "Carreira sólida com alta demanda no mercado",
                  "Trilha de aprendizado contínuo e prático",
                  "Trabalho híbrido, remoto ou presencial",
                  "Porta de entrada para Cloud, DevOps e Segurança",
                ].map(t => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-1.5 size-1.5 rounded-full bg-cyan shrink-0" />
                    <span className="text-muted-foreground">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3 grid sm:grid-cols-1 gap-5 reveal">
            {pillars.map(c => (
              <div key={c.title} className="card-tech p-6 flex gap-5 items-start group">
                <div className="size-14 rounded-xl bg-gradient-primary grid place-items-center shadow-glow shrink-0 group-hover:scale-110 transition-transform">
                  <c.icon className="size-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{c.title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Areas() {
  const areas = [
    { icon: Headphones, name: "Suporte Técnico", desc: "Diagnóstico e resolução de problemas de hardware, software e periféricos para usuários finais." },
    { icon: Network, name: "Infraestrutura de Redes", desc: "Projeto, instalação e manutenção de redes locais, sem fio, switches, roteadores e cabeamento estruturado." },
    { icon: Users, name: "Help Desk", desc: "Primeiro nível de atendimento ao usuário, abertura de chamados e suporte rápido por telefone, chat ou e-mail." },
    { icon: Server, name: "Administração de Sistemas", desc: "Gestão de servidores, sistemas operacionais, contas de usuário, permissões e políticas corporativas." },
    { icon: Cloud, name: "Suporte Remoto", desc: "Atendimento à distância usando ferramentas de acesso remoto, garantindo agilidade e produtividade." },
    { icon: Wrench, name: "Manutenção de Computadores", desc: "Manutenção preventiva e corretiva de desktops, notebooks e periféricos, com troca de peças e otimização." },
  ];
  return (
    <section id="areas" className="relative py-28 bg-surface/40">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          tag="áreas de atuação"
          title="Onde atua o profissional de TI"
          desc="Diversas frentes para construir uma carreira sólida e em constante evolução, com oportunidades em empresas de todos os portes."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
          {areas.map((a, i) => (
            <div key={a.name} className="card-tech p-7 group relative overflow-hidden">
              <div className="absolute top-3 right-4 text-xs font-mono text-muted-foreground/40 group-hover:text-primary/60 transition-colors">
                0{i + 1}
              </div>
              <div className="size-14 rounded-xl bg-secondary/70 border border-border grid place-items-center mb-5 group-hover:bg-gradient-primary group-hover:border-transparent transition-all">
                <a.icon className="size-7 text-cyan group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-semibold">{a.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Tecnologias() {
  const groups = [
    { title: "Sistemas Operacionais", icon: Cpu, items: ["Windows Server", "Linux (Ubuntu, RHEL)", "macOS", "Active Directory"] },
    { title: "Redes", icon: RouterIcon, items: ["Cisco IOS", "MikroTik", "pfSense", "TCP/IP, VLAN, VPN"] },
    { title: "Cloud & Virtualização", icon: Cloud, items: ["AWS", "Azure", "Google Cloud", "VMware, Proxmox, Hyper-V"] },
    { title: "Monitoramento", icon: Monitor, items: ["Zabbix", "Grafana", "PRTG", "Nagios"] },
    { title: "Automação", icon: Terminal, items: ["Bash / PowerShell", "Ansible", "Docker", "Kubernetes"] },
    { title: "Segurança", icon: Lock, items: ["Firewall", "SIEM", "Backup (Veeam)", "MFA & Zero Trust"] },
  ];
  return (
    <section id="tecnologias" className="relative py-28">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          tag="tecnologias e ferramentas"
          title="Stack do dia a dia"
          desc="As principais ferramentas e plataformas utilizadas por profissionais de Suporte e Infraestrutura em ambientes corporativos modernos."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
          {groups.map(g => (
            <div key={g.title} className="card-tech p-7 group relative overflow-hidden">
              <div className="absolute -top-12 -right-12 size-32 rounded-full bg-primary/10 blur-2xl group-hover:bg-primary/20 transition-colors" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-5">
                  <div className="size-11 rounded-lg bg-gradient-accent grid place-items-center shadow-card">
                    <g.icon className="size-5 text-accent-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg">{g.title}</h3>
                </div>
                <ul className="space-y-2.5 text-sm">
                  {g.items.map(i => (
                    <li key={i} className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                      <span className="size-1.5 rounded-full bg-cyan shadow-[0_0_8px_oklch(0.85_0.18_195/0.8)]" />
                      <span className="font-mono text-[13px]">{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certificacoes() {
  const certs = [
    { name: "CompTIA A+", level: "Iniciante", desc: "Fundamentos de hardware, SO e suporte." },
    { name: "CompTIA Network+", level: "Intermediário", desc: "Conceitos sólidos de redes e troubleshooting." },
    { name: "CompTIA Security+", level: "Intermediário", desc: "Segurança da informação e boas práticas." },
    { name: "Cisco CCNA", level: "Intermediário", desc: "Roteamento, switching e fundamentos de rede." },
    { name: "Microsoft MCSA / AZ-104", level: "Avançado", desc: "Administração Windows Server e Azure." },
    { name: "AWS Cloud Practitioner", level: "Iniciante", desc: "Fundamentos de cloud na AWS." },
    { name: "ITIL 4 Foundation", level: "Iniciante", desc: "Boas práticas em gestão de serviços de TI." },
    { name: "LPIC-1", level: "Intermediário", desc: "Administração Linux profissional." },
  ];
  return (
    <section id="certificacoes" className="py-24 bg-surface/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader tag="certificações" title="Trilha de certificações reconhecidas" desc="Validações internacionais que aceleram a carreira em TI." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certs.map(c => (
            <div key={c.name} className="card-tech p-5">
              <Award className="size-8 text-cyan mb-3" />
              <h3 className="font-semibold">{c.name}</h3>
              <span className="inline-block mt-2 text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-primary/15 text-primary border border-primary/30">{c.level}</span>
              <p className="mt-3 text-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Mercado() {
  const niveis = [
    {
      nivel: "Júnior",
      faixa: "R$ 2.000 – R$ 3.500",
      min: 2000, max: 3500, pct: 32,
      icon: HardDrive,
      desc: "Início de carreira, foco em suporte ao usuário, manutenção e atendimento N1.",
      tag: "Entrada",
    },
    {
      nivel: "Pleno",
      faixa: "R$ 4.000 – R$ 6.000",
      min: 4000, max: 6000, pct: 58,
      icon: Headphones,
      desc: "Atuação autônoma em infraestrutura, redes e administração de sistemas.",
      tag: "Crescimento",
      featured: true,
    },
    {
      nivel: "Sênior",
      faixa: "R$ 7.000+",
      min: 7000, max: 12000, pct: 95,
      icon: Server,
      desc: "Liderança técnica, arquitetura, cloud, automação e tomada de decisão estratégica.",
      tag: "Especialista",
    },
  ];

  const stats = [
    { k: "+74 mil", v: "vagas abertas em TI no Brasil", icon: Briefcase },
    { k: "+15%", v: "crescimento anual do setor", icon: TrendingUp },
    { k: "62%", v: "vagas com modelo remoto/híbrido", icon: Cloud },
    { k: "Top 5", v: "carreiras mais procuradas", icon: Award },
  ];

  return (
    <section id="mercado" className="relative py-28">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          tag="salários e mercado de trabalho"
          title="Quanto ganha e onde está a demanda"
          desc="Faixas salariais médias no Brasil para a carreira em Suporte e Infraestrutura — uma das áreas que mais contratam, com forte presença de oportunidades remotas."
        />

        {/* Salary cards */}
        <div className="grid md:grid-cols-3 gap-6 reveal">
          {niveis.map(n => (
            <div
              key={n.nivel}
              className={`card-tech p-7 relative overflow-hidden ${n.featured ? "border-primary/50 shadow-glow" : ""}`}
            >
              {n.featured && (
                <div className="absolute top-4 right-4 text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded bg-gradient-primary text-primary-foreground">
                  Em alta
                </div>
              )}
              <div className="flex items-center gap-3">
                <div className={`size-12 rounded-xl grid place-items-center ${n.featured ? "bg-gradient-primary shadow-glow" : "bg-secondary border border-border"}`}>
                  <n.icon className={`size-6 ${n.featured ? "text-primary-foreground" : "text-cyan"}`} />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{n.tag}</div>
                  <h3 className="text-xl font-bold">{n.nivel}</h3>
                </div>
              </div>

              <div className="mt-6">
                <div className="text-3xl font-display font-bold text-gradient">{n.faixa}</div>
                <div className="text-xs text-muted-foreground mt-1 font-mono">faixa média / mês — CLT</div>
              </div>

              {/* Mini progress bar */}
              <div className="mt-6">
                <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground mb-2">
                  <span>nível salarial</span>
                  <span className="text-cyan">{n.pct}%</span>
                </div>
                <div className="h-2 rounded-full bg-secondary overflow-hidden">
                  <div
                    className="h-full bg-gradient-primary rounded-full transition-all duration-1000"
                    style={{ width: `${n.pct}%` }}
                  />
                </div>
              </div>

              <p className="mt-5 text-sm text-muted-foreground leading-relaxed">{n.desc}</p>
            </div>
          ))}
        </div>

        {/* Bar chart comparativo */}
        <div className="mt-10 card-tech p-7">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
            <div>
              <h3 className="text-lg font-semibold">Comparativo salarial por senioridade</h3>
              <p className="text-xs text-muted-foreground font-mono">// valores médios em R$ / mês</p>
            </div>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-2"><span className="size-3 rounded-sm bg-gradient-primary" /> faixa salarial</span>
            </div>
          </div>
          <div className="space-y-5">
            {niveis.map(n => {
              const widthMin = (n.min / 12000) * 100;
              const widthMax = (n.max / 12000) * 100;
              return (
                <div key={n.nivel}>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="font-medium">{n.nivel}</span>
                    <span className="font-mono text-xs text-muted-foreground">{n.faixa}</span>
                  </div>
                  <div className="relative h-3 rounded-full bg-secondary overflow-hidden">
                    <div
                      className="absolute h-full bg-gradient-primary rounded-full"
                      style={{ left: `${widthMin}%`, width: `${widthMax - widthMin}%` }}
                    />
                  </div>
                </div>
              );
            })}
            <div className="flex justify-between text-[10px] font-mono text-muted-foreground pt-2 border-t border-border">
              <span>R$ 0</span><span>R$ 3k</span><span>R$ 6k</span><span>R$ 9k</span><span>R$ 12k+</span>
            </div>
          </div>
        </div>

        {/* Stats grid */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 reveal">
          {stats.map(s => (
            <div key={s.v} className="card-tech p-6 text-center group">
              <div className="size-12 rounded-xl bg-gradient-accent grid place-items-center mx-auto group-hover:scale-110 transition-transform">
                <s.icon className="size-6 text-accent-foreground" />
              </div>
              <div className="mt-4 text-3xl font-display font-bold text-gradient">{s.k}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.v}</div>
            </div>
          ))}
        </div>

        {/* Insights / texts */}
        <div className="mt-10 grid md:grid-cols-2 gap-5">
          {[
            { icon: TrendingUp, title: "Crescimento acelerado", text: "O setor de TI cresce, em média, 15% ao ano no Brasil — muito acima da média da economia, com déficit de mais de 530 mil profissionais qualificados projetado até 2030." },
            { icon: Briefcase, title: "Alta demanda contínua", text: "Empresas de todos os portes contratam continuamente analistas de suporte, infraestrutura e cloud. A taxa de empregabilidade na área supera 90%." },
            { icon: Cloud, title: "Oportunidades remotas", text: "Mais de 60% das vagas de Suporte e Infraestrutura oferecem modelo remoto ou híbrido, abrindo portas para trabalhar com empresas do Brasil e do exterior." },
            { icon: GraduationCap, title: "Crescimento profissional rápido", text: "Com certificações e prática, é comum sair do nível Júnior para Pleno em 2 a 3 anos, e alcançar Sênior ou especialista em Cloud/DevOps em 5 a 7 anos." },
          ].map(b => (
            <div key={b.title} className="card-tech p-6 flex gap-4 items-start group">
              <div className="size-11 rounded-lg bg-secondary border border-border grid place-items-center shrink-0 group-hover:bg-gradient-primary group-hover:border-transparent transition-all">
                <b.icon className="size-5 text-cyan group-hover:text-primary-foreground transition-colors" />
              </div>
              <div>
                <h4 className="font-semibold">{b.title}</h4>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{b.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Tendencias() {
  const dicas = [
    { icon: Lightbulb, title: "Aprenda inglês técnico", text: "A maioria da documentação, certificações e SOs estão em inglês." },
    { icon: BookOpen, title: "Pratique em laboratório", text: "Use VirtualBox, GNS3 ou Proxmox para simular ambientes reais." },
    { icon: Cloud, title: "Domine pelo menos uma cloud", text: "AWS, Azure ou GCP são presença obrigatória nas empresas." },
    { icon: ShieldCheck, title: "Pense em segurança sempre", text: "Cibersegurança virou requisito básico em qualquer função de TI." },
    { icon: Terminal, title: "Automatize tudo", text: "Shell script, PowerShell e Ansible economizam horas por semana." },
    { icon: GraduationCap, title: "Estude continuamente", text: "TI muda rápido — reserve tempo semanal para se atualizar." },
  ];
  return (
    <section id="tendencias" className="py-24 bg-surface/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader tag="dicas e tendências" title="Para crescer na carreira em 2026+" desc="Recomendações práticas e direções que estão moldando o futuro da infraestrutura." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {dicas.map(d => (
            <div key={d.title} className="card-tech p-6">
              <d.icon className="size-7 text-primary mb-3" />
              <h3 className="font-semibold text-lg">{d.title}</h3>
              <p className="text-muted-foreground text-sm mt-2">{d.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ODS() {
  const contribuicoes = [
    { icon: Lightbulb, title: "Inovação Tecnológica", text: "Adoção de cloud, IoT, automação e IA para impulsionar novos modelos de negócio e soluções inteligentes." },
    { icon: Wifi, title: "Conectividade", text: "Expansão de redes, Wi-Fi e fibra ótica que conectam pessoas, empresas e dispositivos em qualquer lugar." },
    { icon: Server, title: "Infraestrutura Digital", text: "Data centers resilientes, servidores e nuvem que sustentam serviços essenciais 24/7 com alta disponibilidade." },
    { icon: Users, title: "Inclusão Tecnológica", text: "Levar acesso à tecnologia, suporte e capacitação a comunidades, escolas e regiões antes desconectadas." },
    { icon: Globe2, title: "Desenvolvimento Sustentável", text: "Eficiência energética em data centers, virtualização e práticas de TI verde reduzindo impacto ambiental." },
    { icon: TrendingUp, title: "Modernização das Empresas", text: "Transformação digital, automação de processos e migração para cloud aumentam a competitividade do país." },
  ];

  return (
    <section id="ods" className="relative py-28 bg-surface/40 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div aria-hidden className="absolute -top-32 right-0 size-[30rem] rounded-full bg-[oklch(0.65_0.18_45/0.15)] blur-[120px]" />
      <div aria-hidden className="absolute -bottom-32 left-0 size-[28rem] rounded-full bg-accent/15 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Hero ODS card */}
        <div className="card-tech p-8 sm:p-12 grid lg:grid-cols-5 gap-10 items-center relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.65_0.18_45)] to-transparent" />

          <div className="lg:col-span-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs font-mono mb-4">
              <Globe2 className="size-3.5" /> Agenda 2030 da ONU
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              ODS 9 — <span className="text-gradient">Indústria, Inovação e Infraestrutura</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              O Objetivo de Desenvolvimento Sustentável nº 9 da ONU promove a construção de
              <span className="text-foreground font-medium"> infraestruturas resilientes</span>,
              a industrialização inclusiva e sustentável e o fomento à
              <span className="text-foreground font-medium"> inovação</span>. A área de Suporte
              Técnico e Infraestrutura de TI é peça-chave para alcançar essas metas.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { k: "9", v: "ODS da Agenda 2030" },
                { k: "100%", v: "alinhado à TI" },
                { k: "2030", v: "meta global" },
              ].map(s => (
                <div key={s.v} className="rounded-lg bg-secondary/50 border border-border p-3 text-center">
                  <div className="text-2xl font-display font-bold text-gradient">{s.k}</div>
                  <div className="text-[11px] text-muted-foreground mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 relative">
            <div className="aspect-square max-w-sm mx-auto rounded-2xl bg-gradient-to-br from-[oklch(0.7_0.18_45)] to-[oklch(0.55_0.2_30)] p-8 flex flex-col justify-between shadow-glow relative overflow-hidden">
              <div className="absolute inset-0 grid-bg opacity-20" />
              <div className="absolute -top-10 -right-10 size-40 rounded-full bg-white/10 blur-2xl" />
              <div className="relative text-white text-7xl font-display font-bold drop-shadow-lg">9</div>
              <div className="relative text-white">
                <div className="font-display font-bold text-2xl leading-tight">INDÚSTRIA, INOVAÇÃO E INFRAESTRUTURA</div>
                <div className="mt-5 flex items-center gap-3 opacity-95">
                  <div className="size-10 rounded-lg bg-white/15 backdrop-blur grid place-items-center"><Network className="size-5" /></div>
                  <div className="size-10 rounded-lg bg-white/15 backdrop-blur grid place-items-center"><Cpu className="size-5" /></div>
                  <div className="size-10 rounded-lg bg-white/15 backdrop-blur grid place-items-center"><Server className="size-5" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contribuições da TI */}
        <div className="mt-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="text-xs font-mono uppercase tracking-widest text-primary mb-3">// como a TI contribui</div>
            <h3 className="text-2xl sm:text-3xl font-bold">
              O papel do <span className="text-gradient">Suporte e Infraestrutura</span> na ODS 9
            </h3>
            <p className="mt-3 text-muted-foreground">
              Cada profissional de TI ajuda a construir uma sociedade mais conectada, inclusiva e inovadora.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
            {contribuicoes.map((c, i) => (
              <div key={c.title} className="card-tech p-6 group relative overflow-hidden">
                <div className="absolute -top-10 -right-10 size-32 rounded-full bg-accent/10 blur-2xl group-hover:bg-accent/20 transition-colors" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="size-12 rounded-xl bg-gradient-accent grid place-items-center shadow-card group-hover:scale-110 transition-transform">
                      <c.icon className="size-6 text-accent-foreground" />
                    </div>
                    <span className="text-xs font-mono text-muted-foreground/50">0{i + 1}</span>
                  </div>
                  <h4 className="font-semibold text-lg">{c.title}</h4>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      icon: GraduationCap,
      q: "Preciso de faculdade para entrar na área?",
      a: "Não é obrigatório. Cursos técnicos, tecnólogos (Redes, ADS, Sistemas) e bacharelados ampliam oportunidades, mas certificações reconhecidas (CompTIA, Cisco, AWS) e experiência prática têm peso enorme — muitos profissionais entram no mercado pelo caminho técnico.",
    },
    {
      icon: TrendingUp,
      q: "Qual o salário inicial?",
      a: "Para cargos de Suporte Técnico Júnior, a faixa inicial no Brasil fica entre R$ 2.000 e R$ 3.500 (CLT). Em capitais e empresas de tecnologia esse valor sobe rápido com experiência e certificações.",
    },
    {
      icon: Award,
      q: "Quais certificações são importantes?",
      a: "As mais valorizadas para começar são CompTIA A+ e Network+. Em seguida, Cisco CCNA (redes), Microsoft AZ-104 ou AWS Cloud Practitioner (cloud), ITIL 4 (gestão de serviços) e LPIC-1 (Linux) abrem portas para níveis Pleno e Sênior.",
    },
    {
      icon: Cloud,
      q: "É possível trabalhar remotamente?",
      a: "Sim. Mais de 60% das vagas em Suporte, Infraestrutura, Cloud e NOC oferecem modelo remoto ou híbrido — incluindo oportunidades em empresas internacionais que pagam em dólar ou euro.",
    },
    {
      icon: Briefcase,
      q: "A área possui crescimento?",
      a: "Sim, e muito. O setor de TI cresce cerca de 15% ao ano no Brasil, com déficit projetado de mais de 530 mil profissionais até 2030. A trajetória Júnior → Pleno → Sênior costuma acontecer em 5 a 7 anos com estudo contínuo.",
    },
    {
      icon: Lightbulb,
      q: "Quais habilidades preciso desenvolver?",
      a: "Técnicas: redes (TCP/IP), sistemas operacionais (Windows e Linux), virtualização, cloud e segurança. Comportamentais: comunicação clara, resolução de problemas, trabalho em equipe, organização e inglês técnico para ler documentação.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-28 bg-surface/40">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeader
          tag="faq"
          title="Perguntas frequentes"
          desc="Tire suas principais dúvidas sobre a carreira em Suporte Técnico e Infraestrutura de TI."
        />
        <div className="space-y-3 reveal">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`card-tech overflow-hidden transition-all ${isOpen ? "border-primary/50 shadow-glow" : ""}`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between text-left p-5 gap-4 group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className={`size-10 rounded-lg grid place-items-center shrink-0 transition-all ${isOpen ? "bg-gradient-primary shadow-glow" : "bg-secondary border border-border group-hover:border-primary/40"}`}>
                      <f.icon className={`size-5 transition-colors ${isOpen ? "text-primary-foreground" : "text-cyan"}`} />
                    </div>
                    <span className="font-medium text-base sm:text-lg">{f.q}</span>
                  </div>
                  <div className={`size-9 rounded-full grid place-items-center shrink-0 border transition-all ${isOpen ? "bg-primary/15 border-primary/40 rotate-180" : "border-border group-hover:border-primary/40"}`}>
                    <ChevronDown className="size-4 text-primary" />
                  </div>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 pt-1 ml-14 text-muted-foreground text-sm leading-relaxed border-l-2 border-primary/40 pl-5">
                      {f.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 card-tech p-6 sm:p-7 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
          <div className="size-12 rounded-xl bg-gradient-accent grid place-items-center shrink-0">
            <Mail className="size-6 text-accent-foreground" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold">Ainda tem dúvidas?</h4>
            <p className="text-sm text-muted-foreground mt-1">Entre em contato com a nossa equipe e teremos prazer em ajudar.</p>
          </div>
          <a href="#contato" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:opacity-90 transition">
            Fale conosco
          </a>
        </div>
      </div>
    </section>
  );
}

function Equipe() {
  const time = [
    {
      nome: "Rodrigo Nogueira",
      papel: "Gestor em TI",
      initials: "RN",
      desc: "Responsável por levantar referências, dados de mercado e estruturar o conteúdo técnico do projeto.",
      linkedin: "https://linkedin.com/in/rodrigo-nogueira-code",
      github: "https://github.com/Nogueira-web",
    },
    {
      nome: "Marília Goulart",
      papel: "Gestora em TI",
      initials: "MG",
      desc: "Cuidou da identidade visual, paleta tecnológica, tipografia e layout responsivo das seções.",
      linkedin: "https://www.linkedin.com/in/marilia-goulart-tech/",
      github: "https://github.com/marilhosa",
    },
    {
      nome: "Danniel",
      papel: "Gestor em TI",
      initials: "DA",
      desc: "Implementou os componentes em React + Tailwind, animações suaves e a estrutura responsiva.",
      linkedin: "https://www.linkedin.com/in/danniel-matheus-de-souza-2637bb215/",
      github: "https://github.com/dannimts",
    },
    {
      nome: "Wagner",
      papel: "Analista de Sistemas",
      initials: "WA",
      desc: "Organizou a documentação, roteiro de apresentação acadêmica e revisão final do projeto.",
      linkedin: "https://www.linkedin.com/in/wagner-junior-96a834376",
      github: "https://github.com/0000000000000000000000000000000000009",
    },
  ];
  return (
    <section id="equipe" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute -top-24 right-0 size-72 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-0 size-72 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative">
        <SectionHeader
          tag="equipe de desenvolvimento"
          title="Quem construiu este projeto"
          desc="Estudantes da área de Tecnologia da Informação que uniram pesquisa, design e código para criar o ConectaTI."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal">
          {time.map(p => (
            <div
              key={p.nome}
              className="group relative card-tech p-6 text-center overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-primary/10 via-transparent to-accent/10 pointer-events-none" />
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 size-40 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative mx-auto w-fit">
                <div className="absolute inset-0 rounded-full bg-gradient-primary blur-md opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="relative size-24 rounded-full bg-gradient-primary p-[2px] shadow-glow transition-transform duration-500 group-hover:scale-105">
                  <div className="size-full rounded-full bg-surface overflow-hidden grid place-items-center">
                    <img
                      src={`${p.github.replace(/\/$/, "")}.png?size=200`}
                      alt={`Foto de ${p.nome}`}
                      loading="lazy"
                      className="size-full object-cover"
                      onError={(e) => {
                        const img = e.currentTarget;
                        img.style.display = "none";
                        const fb = img.nextElementSibling as HTMLElement | null;
                        if (fb) fb.style.display = "flex";
                      }}
                    />
                    <span
                      className="hidden size-full items-center justify-center text-2xl font-display font-bold text-gradient"
                    >
                      {p.initials}
                    </span>
                  </div>
                </div>
              </div>

              <h3 className="mt-5 font-display text-lg font-semibold">{p.nome}</h3>
              <p className="text-xs font-mono uppercase tracking-wider text-primary mt-1">
                {p.papel}
              </p>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                {p.desc}
              </p>

              <div className="mt-5 flex items-center justify-center gap-2">
                <a
                  href={p.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`LinkedIn de ${p.nome}`}
                  className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface/60 px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-primary hover:border-primary/60 hover:shadow-glow transition-all"
                >
                  <Linkedin className="size-3.5" />
                  LinkedIn
                </a>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`GitHub de ${p.nome}`}
                  className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface/60 px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-primary hover:border-primary/60 hover:shadow-glow transition-all"
                >
                  <Github className="size-3.5" />
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contato() {
  const [status, setStatus] = useState<"idle" | "ok">("idle");
  const [form, setForm] = useState({ nome: "", email: "", assunto: "", mensagem: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("ok");
    setForm({ nome: "", email: "", assunto: "", mensagem: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  const socials = [
    { icon: Github, label: "GitHub do projeto", href: "https://github.com" },
    { icon: Linkedin, label: "LinkedIn do grupo", href: "https://www.linkedin.com" },
    { icon: Mail, label: "E-mail", href: "mailto:contato@conectati.edu.br" },
  ];

  return (
    <section id="contato" className="py-24 bg-surface/40 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 -left-24 size-72 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -right-24 size-72 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative">
        <SectionHeader
          tag="contato"
          title="Vamos conversar"
          desc="Tem dúvidas sobre o projeto ou quer saber mais sobre a carreira em TI? Envie uma mensagem ou conecte-se com o grupo."
        />

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Info card */}
          <div className="lg:col-span-2 card-tech p-7 space-y-6">
            <div>
              <h3 className="font-display text-xl font-semibold">Fale com o grupo ConectaTI</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Estamos abertos a feedbacks, dúvidas acadêmicas e parcerias estudantis na área de TI.
              </p>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-surface/60 border border-border">
                <div className="size-9 rounded-md bg-gradient-primary grid place-items-center shrink-0">
                  <Mail className="size-4 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase text-muted-foreground">E-mail</div>
                  <div>contato@conectati.edu.br</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-surface/60 border border-border">
                <div className="size-9 rounded-md bg-gradient-primary grid place-items-center shrink-0">
                  <Phone className="size-4 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase text-muted-foreground">Telefone</div>
                  <div>+55 (11) 99999-0000</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-surface/60 border border-border">
                <div className="size-9 rounded-md bg-gradient-primary grid place-items-center shrink-0">
                  <MapPin className="size-4 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase text-muted-foreground">Local</div>
                  <div>Curso Técnico em Informática</div>
                </div>
              </div>
            </div>

            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">
                Redes do projeto
              </div>
              <div className="flex flex-wrap gap-2">
                {socials.map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/60 px-3 py-2 text-xs font-medium text-muted-foreground hover:text-primary hover:border-primary/60 hover:shadow-glow transition-all"
                  >
                    <s.icon className="size-4" />
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form card */}
          <form
            onSubmit={onSubmit}
            className="lg:col-span-3 card-tech p-7 space-y-5 relative overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 size-56 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

            <div className="relative grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Nome</label>
                <input
                  required
                  maxLength={100}
                  value={form.nome}
                  onChange={e => setForm({ ...form, nome: e.target.value })}
                  className="mt-1 w-full px-4 py-2.5 rounded-md bg-secondary/60 border border-border focus:outline-none focus:border-primary focus:shadow-glow transition"
                />
              </div>
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">E-mail</label>
                <input
                  required
                  type="email"
                  maxLength={255}
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className="mt-1 w-full px-4 py-2.5 rounded-md bg-secondary/60 border border-border focus:outline-none focus:border-primary focus:shadow-glow transition"
                />
              </div>
            </div>

            <div className="relative">
              <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Assunto</label>
              <input
                required
                maxLength={120}
                value={form.assunto}
                onChange={e => setForm({ ...form, assunto: e.target.value })}
                className="mt-1 w-full px-4 py-2.5 rounded-md bg-secondary/60 border border-border focus:outline-none focus:border-primary focus:shadow-glow transition"
              />
            </div>

            <div className="relative">
              <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Mensagem</label>
              <textarea
                required
                rows={5}
                maxLength={1000}
                value={form.mensagem}
                onChange={e => setForm({ ...form, mensagem: e.target.value })}
                className="mt-1 w-full px-4 py-2.5 rounded-md bg-secondary/60 border border-border focus:outline-none focus:border-primary focus:shadow-glow transition resize-none"
              />
              <div className="text-[10px] font-mono text-muted-foreground text-right mt-1">
                {form.mensagem.length}/1000
              </div>
            </div>

            <div className="relative flex items-center justify-between gap-4 flex-wrap">
              <p className="text-xs text-muted-foreground">
                Resposta em até 48h úteis.
              </p>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:opacity-90 hover:scale-[1.02] transition"
              >
                <Mail className="size-4" />
                Enviar mensagem
              </button>
            </div>

            {status === "ok" && (
              <div className="relative text-sm rounded-md border border-primary/40 bg-primary/10 px-4 py-3 text-foreground animate-fade-in-up">
                ✓ Mensagem enviada com sucesso! (demonstração acadêmica)
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const socials = [
    { icon: Github, label: "GitHub", href: "https://github.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com" },
    { icon: Mail, label: "E-mail", href: "mailto:contato@conectati.edu.br" },
  ];
  const creditos = [
    "Rodrigo Nogueira — Gestor em TI",
    "Marília Goulart — Gestora em TI",
    "Danniel — Gestor em TI",
    "Wagner — Analista de Sistemas",
  ];

  return (
    <footer className="relative border-t border-border bg-surface/40 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="absolute -top-24 left-1/3 size-72 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-14 grid md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2">
            <div className="size-10 rounded-lg bg-gradient-primary grid place-items-center shadow-glow">
              <Network className="size-5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-xl">
              Conecta<span className="text-gradient">TI</span>
            </span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Tema Integrador sobre a carreira em Suporte Técnico e Infraestrutura de TI.
          </p>
          <div className="mt-4 flex gap-2">
            {socials.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="size-9 grid place-items-center rounded-md border border-border bg-surface/60 text-muted-foreground hover:text-primary hover:border-primary/60 hover:shadow-glow transition-all"
              >
                <s.icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Projeto */}
        <div>
          <h4 className="font-semibold mb-3 flex items-center gap-2">
            <BookOpen className="size-4 text-primary" /> Projeto
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Tema Integrador 2026</li>
            <li>Faculdade de Tecnologia</li>
            <li>Curso Técnico em Informática</li>
            <li>Disciplina: Carreiras em TI</li>
          </ul>
        </div>

        {/* Navegação */}
        <div>
          <h4 className="font-semibold mb-3 flex items-center gap-2">
            <Network className="size-4 text-primary" /> Navegação
          </h4>
          <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
            {nav.map(n => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-primary transition">{n.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Créditos */}
        <div>
          <h4 className="font-semibold mb-3 flex items-center gap-2">
            <Users className="size-4 text-primary" /> Créditos do grupo
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {creditos.map(c => (
              <li key={c} className="flex items-start gap-2">
                <span className="mt-1.5 size-1.5 rounded-full bg-primary shrink-0" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>
            © {new Date().getFullYear()} <span className="text-foreground font-medium">ConectaTI</span> · Todos os direitos reservados.
          </div>
          <div className="font-mono">
            Projeto universitário · Tema Integrador · Faculdade de Tecnologia
          </div>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Areas />
        <Tecnologias />
        <Certificacoes />
        <Mercado />
        <Tendencias />
        <ODS />
        <FAQ />
        <Equipe />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}
