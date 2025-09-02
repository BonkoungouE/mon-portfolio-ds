import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Link as LinkIcon, Calendar, MapPin, Building2, ExternalLink, ArrowRight, Star, Sun, Moon, Filter } from 'lucide-react'
import * as Recharts from 'recharts'

const ResponsiveContainer = Recharts.ResponsiveContainer as unknown as React.ComponentType<any>;
const BarChart = Recharts.BarChart as unknown as React.ComponentType<any>;
const XAxis = Recharts.XAxis as unknown as React.ComponentType<any>;
const YAxis = Recharts.YAxis as unknown as React.ComponentType<any>;
const Bar = Recharts.Bar as unknown as React.ComponentType<any>;
const Tooltip = Recharts.Tooltip as unknown as React.ComponentType<any>;


const INFO = {
  nom: 'Emmanuel BONKOUNGOU',
  titre: 'Ingenieur Statisticien Economiste specialisé en Data Science et Marketing',
  localisation: 'Ouagadougou, Burkina Faso',
  pitch: "Je conçois des modèles de machine learning orientés impact et des produits data. J'aime transformer des données en décisions.",
  email: 'emmanuelbonkoungou97@gmail.com',
  github: 'https://github.com/username',
  linkedin: 'https://www.linkedin.com/in/username/',
  cvUrl: '#',
}

const COMPETENCES = [
  { name: 'Python', level: 95 },
  { name: 'SQL', level: 90 },
  { name: 'scikit-learn', level: 88 },
  { name: 'TensorFlow', level: 75 },
  { name: 'PyTorch', level: 70 },
  { name: 'pandas', level: 92 },
  { name: 'Spark', level: 65 },
  { name: 'Tableau/Power BI', level: 80 },
  { name: 'MLOps (Docker/MLflow)', level: 72 },
]

const TAGS = ['NLP', 'Computer Vision', 'Recommandation', 'Time Series', 'Dashboard', 'MLOps', 'A/B Testing', 'Cloud']

const PROJETS = [
  {
    titre: 'Prédiction de churn telco',
    resume: "Modèle supervisé pour identifier les clients à risque et réduire le churn.",
    impact: '-12% churn en 6 mois',
    liens: { code: 'https://github.com/username/churn-telco', demo: '#' },
    tags: ['Classification', 'scikit-learn', 'SQL', 'Dashboard'],
    etoiles: 5,
  },
  {
    titre: 'Recommandation e-commerce',
    resume: 'Système de recommandation hybride (collaboratif + contenu).',
    impact: '+8% CTR recommandations',
    liens: { code: 'https://github.com/username/reco', demo: '#' },
    tags: ['Recommandation', 'PyTorch', 'API'],
    etoiles: 4,
  },
  {
    titre: 'NLP – Analyse de sentiment',
    resume: 'Pipeline NLP pour classer le sentiment de tweets multi-langues.',
    impact: 'F1-macro 0.86',
    liens: { code: 'https://github.com/username/nlp-sentiment', demo: '#' },
    tags: ['NLP', 'Transformers', 'Python'],
    etoiles: 4,
  },
  {
    titre: "Vision – Détection d'objets",
    resume: "Détection temps-réel (YOLOv8) sur dataset custom.",
    impact: 'mAP@50 0.78',
    liens: { code: 'https://github.com/username/yolo-detection', demo: '#' },
    tags: ['Computer Vision', 'Deep Learning'],
    etoiles: 3,
  },
]

const EXPERIENCES = [
  {
    poste: 'Data Scientist',
    entreprise: 'TechCorp',
    date: '2023 – 2025',
    lieu: 'Paris, FR',
    points: [
      "Mise en production d'un modèle de scoring (AUC 0.91) exposé via API.",
      'Feature Store + tracking MLflow pour la traçabilité.',
      'A/B tests et ateliers data avec les équipes produit.',
    ],
  },
  {
    poste: 'Data Analyst',
    entreprise: 'FinServe',
    date: '2021 – 2023',
    lieu: 'Lyon, FR',
    points: [
      'Automatisation des tableaux de bord (Power BI).',
      "Optimisation SQL (−40% temps d'exécution)."
    ],
  },
]

const FORMATION = [
  { titre: 'Master Data Science', etab: 'Université Exemple', date: '2019 – 2021' },
  { titre: 'AWS Machine Learning – Specialty', etab: 'Amazon Web Services', date: '2024' },
]

const PUBLICATIONS = [
  { titre: 'Optimiser le churn modeling avec des embeddings', lien: '#', annee: 2024 },
  { titre: 'Guide pratique MLflow en production', lien: '#', annee: 2023 },
]

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
)

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur">
      <Container>
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500" />
            <span className="text-lg font-semibold">{INFO.nom}</span>
            <span className="rounded-full border px-2 py-0.5 text-xs">{INFO.titre}</span>
          </div>
          <div className="flex items-center gap-2">
            <a href={INFO.github} target="_blank" className="p-2 rounded-xl hover:bg-neutral-100"><Github className="h-5 w-5" /></a>
            <a href={INFO.linkedin} target="_blank" className="p-2 rounded-xl hover:bg-neutral-100"><Linkedin className="h-5 w-5" /></a>
            <a href={`mailto:${INFO.email}`} className="p-2 rounded-xl hover:bg-neutral-100"><Mail className="h-5 w-5" /></a>
          </div>
        </div>
      </Container>
    </header>
  )
}

function Hero() {
  return (
    <section className="border-b bg-white">
      <Container>
        <div className="grid gap-8 py-10 md:grid-cols-2 md:py-16">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">Salut, moi c'est {INFO.nom}</h1>
            <p className="mt-4 text-lg text-neutral-600">{INFO.pitch}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href={INFO.cvUrl} target="_blank" className="rounded-2xl bg-neutral-900 px-4 py-2 text-white hover:opacity-90">Télécharger mon CV</a>
              <span className="inline-flex items-center text-sm text-neutral-600"><MapPin className="mr-1 h-4 w-4" /> {INFO.localisation}</span>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="rounded-2xl border p-4">
              <h3 className="mb-2 text-lg font-semibold">Compétences clés</h3>
              <div className="h-56 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={COMPETENCES} margin={{ left: 0, right: 8, top: 10, bottom: 0 }}>
                    <XAxis dataKey="name" angle={-20} textAnchor="end" height={50} interval={0} tick={{ fontSize: 11 }} />
                    <YAxis domain={[0, 100]} tickFormatter={(v: number) => `${v}%`} />
                    <Tooltip formatter={(v: number) => `${v}%`} />
                    <Bar dataKey="level" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {TAGS.map(t => <span key={t} className="rounded-full border px-2 py-1 text-xs">{t}</span>)}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

function Projets() {
  const [query, setQuery] = useState('')
  const [tri, setTri] = useState<'etoiles' | 'alpha'>('etoiles')
  const [filtreTag, setFiltreTag] = useState<string | null>(null)

  const projetsFiltres = useMemo(() => {
    let list = PROJETS.filter(p =>
      (p.titre + p.resume + p.tags.join(' ')).toLowerCase().includes(query.toLowerCase())
    )
    if (filtreTag) list = list.filter(p => p.tags.includes(filtreTag))
    if (tri === 'etoiles') list = [...list].sort((a, b) => b.etoiles - a.etoiles)
    if (tri === 'alpha') list = [...list].sort((a, b) => a.titre.localeCompare(b.titre))
    return list
  }, [query, tri, filtreTag])

  return (
    <section className="border-b py-12 md:py-16 bg-white">
      <Container>
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Projets</h2>
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              <select value={tri} onChange={(e) => setTri(e.target.value as any)} className="rounded-xl border px-3 py-2 text-sm">
                <option value="etoiles">★ Pertinence</option>
                <option value="alpha">A → Z</option>
              </select>
            </div>
            <select value={filtreTag ?? ''} onChange={(e) => setFiltreTag(e.target.value || null)} className="rounded-xl border px-3 py-2 text-sm">
              <option value="">Filtrer par tag</option>
              {Array.from(new Set(PROJETS.flatMap(p => p.tags))).map(t => <option key={t} value={t}>{t}</option>)}
            </select>
            <button onClick={() => { setFiltreTag(null); setQuery(''); setTri('etoiles') }} className="rounded-xl border px-3 py-2 text-sm hover:bg-neutral-50">Réinitialiser</button>
          </div>
        </div>

        <div className="mb-6">
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Rechercher un projet (NLP, vision, SQL, etc.)" className="w-full rounded-xl border px-3 py-2" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projetsFiltres.map((p) => (
            <motion.div key={p.titre} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="h-full rounded-2xl border p-4">
                <div className="mb-2 flex items-center justify-between">
                  <div className="font-semibold">{p.titre}</div>
                  <div className="flex items-center text-amber-500">{Array.from({ length: p.etoiles }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
                </div>
                <p className="text-sm text-neutral-600">{p.resume}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map(t => <span key={t} className="rounded-full border px-2 py-1 text-xs">{t}</span>)}
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm text-neutral-600">
                  <span className="rounded-full border px-2 py-0.5 text-xs">Impact</span>
                  <span>{p.impact}</span>
                </div>
                <div className="mt-4 flex gap-2">
                  <a href={p.liens.code} target="_blank" className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm hover:bg-neutral-50"><Github className="h-4 w-4" /> Code</a>
                  <a href={p.liens.demo} target="_blank" className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-3 py-2 text-sm text-white hover:opacity-90"><ExternalLink className="h-4 w-4" /> Démo</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Experience() {
  return (
    <section className="border-b py-12 md:py-16 bg-white">
      <Container>
        <h2 className="mb-8 text-2xl font-semibold tracking-tight md:text-3xl">Expérience</h2>
        <div className="space-y-6">
          {EXPERIENCES.map(e => (
            <div key={e.poste} className="rounded-2xl border p-4">
              <div className="mb-1 flex flex-wrap items-center gap-2 text-lg font-semibold"><Building2 className="h-5 w-5" /> {e.poste} · {e.entreprise}</div>
              <div className="mb-2 flex flex-wrap items-center gap-4 text-sm text-neutral-600">
                <span className="inline-flex items-center"><Calendar className="mr-1 h-4 w-4" /> {e.date}</span>
                <span className="inline-flex items-center"><MapPin className="mr-1 h-4 w-4" /> {e.lieu}</span>
              </div>
              <ul className="list-inside list-disc space-y-1 text-sm text-neutral-700">
                {e.points.map(p => <li key={p}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Formation() {
  return (
    <section className="border-b py-12 md:py-16 bg-white">
      <Container>
        <h2 className="mb-6 text-2xl font-semibold tracking-tight md:text-3xl">Formation & Certifications</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {FORMATION.map((f) => (
            <div key={f.titre} className="rounded-2xl border p-4">
              <div className="text-lg font-semibold">{f.titre}</div>
              <div className="mt-1 flex items-center justify-between text-sm text-neutral-600">
                <span>{f.etab}</span><span>{f.date}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Publications() {
  return (
    <section className="border-b py-12 md:py-16 bg-white">
      <Container>
        <h2 className="mb-6 text-2xl font-semibold tracking-tight md:text-3xl">Publications & Contributions</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {PUBLICATIONS.map(a => (
            <div key={a.titre} className="rounded-2xl border p-4">
              <a href={a.lien} target="_blank" className="inline-flex items-center gap-2 font-semibold hover:underline">
                <LinkIcon className="h-4 w-4" /> {a.titre}
              </a>
              <div className="mt-2 text-sm text-neutral-600">{a.annee}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default function PortfolioFR() {
  const [onglet, setOnglet] = useState<'projets' | 'experience' | 'plus'>('projets')

  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased">
      <Header />
      <main>
        <Hero />
        <section className="border-b py-12 md:py-16 bg-white">
          <Container>
            <div className="mb-6 grid w-full grid-cols-3 rounded-2xl border p-1 text-sm">
              {(['projets','experience','plus'] as const).map(key => (
                <button key={key} onClick={() => setOnglet(key)} className={`rounded-xl px-3 py-2 ${onglet===key ? 'bg-neutral-900 text-white' : ''}`}>
                  {key === 'projets' ? 'Projets' : key === 'experience' ? 'Expérience' : 'Publications & Formation'}
                </button>
              ))}
            </div>
            {onglet === 'projets' && <Projets />}
            {onglet === 'experience' && <Experience />}
            {onglet === 'plus' && (<><Publications /><Formation /></>)}
          </Container>
        </section>
        <section className="py-12 md:py-16 bg-white">
          <Container>
            <div className="rounded-2xl border p-4">
              <h3 className="mb-2 text-lg font-semibold">Contact</h3>
              <p className="text-sm text-neutral-700">Intéressé·e par une collaboration ? Écrivez-moi.</p>
              <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
                <span className="inline-flex items-center gap-1 rounded-full border px-2 py-1"><Mail className="h-4 w-4" /> {INFO.email}</span>
                <a className="inline-flex items-center gap-1 rounded-full border px-2 py-1" href={INFO.github} target="_blank"><Github className="h-4 w-4" /> GitHub</a>
                <a className="inline-flex items-center gap-1 rounded-full border px-2 py-1" href={INFO.linkedin} target="_blank"><Linkedin className="h-4 w-4" /> LinkedIn</a>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <footer className="border-t py-8 text-center text-sm text-neutral-600">
        <Container>
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              <span>© {new Date().getFullYear()} {INFO.nom}</span>
              <span>•</span>
              <span>Construit avec React + Tailwind</span>
            </div>
            <a href="#top" className="inline-flex items-center gap-1 hover:underline">
              Explorer les projets <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Container>
      </footer>
    </div>
  )
}

