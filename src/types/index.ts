export interface NavItem {
  label: string
  href: string
  dropdown?: NavItem[]
}

export interface Social {
  name: string
  url: string
  icon: 'instagram' | 'facebook' | 'youtube' | 'tiktok'
}

export interface Stat {
  label: string
  value: string
}

export interface Instructor {
  name: string
  role: string
  bio: string
  image: string
}

export interface Review {
  name: string
  role: string
  text: string
  stars: number
  avatar: string
}

export interface Unit {
  name: string
  address: string
  cta: string
}

export interface UnitFull {
  name: string
  slug: string
  address: string
  neighborhood: string
  city: string
  phone: string
  whatsappLink: string
  mapsUrl: string
  mapsEmbedUrl: string
}

export interface FooterDoc {
  label: string
  href: string
}

export type ModalidadeTag = 'infantil' | 'adulto' | 'no-gi' | 'competicao'

export interface Modalidade {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  tags: ModalidadeTag[]
  levels: string[]
}

export interface ScheduleClass {
  name: string
  level: 'iniciante' | 'intermediario' | 'avancado' | 'todos' | 'kids' | 'baby'
  instructor?: string
}

export interface ScheduleSlot {
  time: string
  monday?: ScheduleClass
  tuesday?: ScheduleClass
  wednesday?: ScheduleClass
  thursday?: ScheduleClass
  friday?: ScheduleClass
  saturday?: ScheduleClass
}

export interface AboutValue {
  title: string
  text: string
}

export interface AboutContent {
  headline: string
  intro: string
  vision: string
  mission: string
  values: AboutValue[]
  quote: string
  teamImage: string
}
