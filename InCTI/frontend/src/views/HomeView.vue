<script setup>
import { ref } from 'vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

const activePoint = ref(null)

const graphPoints = [
  {
    id: 1,
    x: 12,
    y: 76,
    number: '01',
    title: 'Monitoramento',
    benefit: 'Acompanhe os principais indicadores da sua operação em tempo real.'
  },
  {
    id: 2,
    x: 32,
    y: 62,
    number: '02',
    title: 'Análise',
    benefit: 'Encontre padrões e relações importantes entre os seus dados.'
  },
  {
    id: 3,
    x: 52,
    y: 68,
    number: '03',
    title: 'Prevenção',
    benefit: 'Identifique sinais de risco antes que eles evoluam para problemas.'
  },
  {
    id: 4,
    x: 72,
    y: 42,
    number: '04',
    title: 'Inteligência',
    benefit: 'Transforme dados dispersos em contexto para sua operação.'
  },
  {
    id: 5,
    x: 90,
    y: 20,
    number: '05',
    title: 'Decisão',
    benefit: 'Use informações organizadas para apoiar decisões estratégicas.'
  }
]

function ativarPonto(point) {
  activePoint.value = point
}

function desativarPonto() {
  activePoint.value = null
}
</script>

<template>
  <main class="min-h-screen w-full overflow-x-hidden bg-[#010300] text-white">

    <Header />

    <section id="inicio" class="relative flex min-h-screen w-full items-center justify-center overflow-hidden">

      <img src="../assets/images/HomeBackground.gif" alt="" aria-hidden="true"
        class="absolute inset-0 h-full w-full object-cover object-center">

      <div class="absolute inset-0 bg-[#010300]/80"></div>

      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(187,222,198,0.15),transparent_40%)]"></div>

      <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(91,139,117,0.12),transparent_35%)]">
      </div>

      <div
        class="relative z-10 flex w-full max-w-5xl flex-col items-center justify-center px-5 pt-32 text-center sm:px-8 sm:pt-36">

        <div
          class="flex items-center justify-center gap-2 rounded-full border border-[#bbdec6]/20 bg-[#010300]/40 px-4 py-2 backdrop-blur-md">

          <span class="h-1.5 w-1.5 rounded-full bg-[#bbdec6] shadow-[0_0_1rem_rgba(187,222,198,0.9)]"></span>

          <span
            class="text-[0.5rem] uppercase tracking-[0.16em] text-[#bbdec6]/80 sm:text-[0.6rem] sm:tracking-[0.2em]">
            Nova geração de inteligência
          </span>

        </div>

        <h1
          class="mt-8 max-w-4xl text-[2.7rem] font-medium leading-[1] tracking-[-0.05em] sm:text-5xl md:text-6xl lg:text-7xl">
          Enxergue os sinais
          <span class="mt-2 block text-[#bbdec6] sm:mt-3">
            por trás do ruído.
          </span>
        </h1>

        <p
          class="mx-auto mt-8 max-w-2xl text-[0.78rem] leading-8 tracking-[0.01em] text-white/45 sm:mt-9 sm:text-sm sm:leading-9 md:text-base">
          Transforme dados em inteligência, acompanhe indicadores
          e identifique padrões para tomar decisões com mais contexto.
        </p>

        <div class="mt-10 flex w-full max-w-xl flex-col items-center justify-center gap-4 sm:flex-row">

          <router-link to="/login"
            class="flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-[#bbdec6] px-8 text-sm font-semibold text-[#010300] transition hover:bg-white hover:shadow-[0_0_2.5rem_rgba(187,222,198,0.18)] sm:w-auto">
            Explorar plataforma
            <span class="text-base">
              →
            </span>
          </router-link>

          <a href="#grafico"
            class="flex h-13 w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-8 text-sm text-white/75 backdrop-blur-md transition hover:border-[#bbdec6]/20 hover:bg-white/[0.08] hover:text-white sm:w-auto">
            Ver como funciona
            <span>
              ↓
            </span>
          </a>

        </div>

        <div class="mt-14 flex items-center justify-center gap-3">
          <span  class="h-px w-8 bg-[#bbdec6]/30"></span>

          <span class="text-[0.55rem] tracking-[0.01em] text-white/25 sm:text-xs">
            Inteligência que transforma informação em ação
          </span>

          <span class="h-px w-8 bg-[#bbdec6]/30"></span>
        </div>

      </div>

      <div class="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-center text-[0.55rem] text-white/25">
        Role para explorar ↓
      </div>

    </section>

    <section class="flex w-full justify-center px-5 py-10 sm:px-8 lg:px-12">

      <div
        class="grid w-full max-w-6xl grid-cols-2 overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-md md:grid-cols-4">

        <div
          class="flex min-h-[7rem] flex-col items-center justify-center gap-2 border-b border-white/[0.06] px-3 text-center md:border-b-0">
          <span class="text-xl font-medium text-[#bbdec6] sm:text-2xl">
            99.9%
          </span>

          <span class="text-[0.55rem] leading-5 text-white/25 sm:text-xs">
            Disponibilidade
          </span>
        </div>

        <div
          class="flex min-h-[7rem] flex-col items-center justify-center gap-2 border-b border-l border-white/[0.06] px-3 text-center md:border-b-0">
          <span class="text-xl font-medium text-[#bbdec6] sm:text-2xl">
            &lt; 5 min
          </span>

          <span class="text-[0.55rem] leading-5 text-white/25 sm:text-xs">
            Detecção média
          </span>
        </div>

        <div
          class="flex min-h-[7rem] flex-col items-center justify-center gap-2 border-l border-white/[0.06] px-3 text-center">
          <span class="text-xl font-medium text-[#bbdec6] sm:text-2xl">
            150+
          </span>

          <span class="text-[0.55rem] leading-5 text-white/25 sm:text-xs">
            Fontes integradas
          </span>
        </div>

        <div
          class="flex min-h-[7rem] flex-col items-center justify-center gap-2 border-l border-white/[0.06] px-3 text-center">
          <span class="text-xl font-medium text-[#bbdec6] sm:text-2xl">
            24/7
          </span>

          <span class="text-[0.55rem] leading-5 text-white/25 sm:text-xs">
            Monitoramento
          </span>
        </div>

      </div>

    </section>

    <section id="plataforma" class="flex w-full flex-col items-center px-5 py-24 text-center sm:px-8 md:py-32 lg:px-12">

      <span class="text-[0.55rem] uppercase tracking-[0.25em] text-[#bbdec6]/65">
        Plataforma
      </span>

      <h2 class="mt-5 max-w-3xl text-3xl font-medium leading-[1.15] tracking-[-0.04em] sm:text-4xl md:text-5xl">
        Tudo o que você precisa
        <span class="block mt-2 text-[#bbdec6] sm:mt-3">
          em um só lugar.
        </span>
      </h2>

      <p class="mx-auto mt-6 max-w-2xl text-sm leading-8 tracking-[0.01em] text-white/35 sm:leading-9">
        Centralize informações, acompanhe tendências e transforme
        dados em inteligência para sua operação.
      </p>

      <div class="mx-auto mt-14 flex w-full max-w-6xl flex-col items-center justify-center gap-5 md:flex-row">

        <article
          class="group flex w-full max-w-sm flex-col items-center rounded-2xl border border-white/[0.07] bg-white/[0.025] p-8 text-center backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#bbdec6]/20 hover:bg-[#bbdec6]/[0.035]">

          <div
            class="flex h-12 w-12 items-center justify-center rounded-xl border border-[#bbdec6]/10 bg-[#bbdec6]/[0.05] text-[#bbdec6]">

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="1.6" class="h-5 w-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 19V5M4 19h16" />

              <path stroke-linecap="round" stroke-linejoin="round" d="M7 16l4-5 3 2 5-7" />
            </svg>

          </div>

          <h3 class="mt-7 text-base font-medium">
            Análise Preditiva
          </h3>

          <p class="mt-4 max-w-xs text-xs leading-8 tracking-[0.01em] text-white/30">
            Encontre padrões e acompanhe sinais
            relevantes para sua operação.
          </p>

        </article>

        <article
          class="group flex w-full max-w-sm flex-col items-center rounded-2xl border border-white/[0.07] bg-white/[0.025] p-8 text-center backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#bbdec6]/20 hover:bg-[#bbdec6]/[0.035]">

          <div
            class="flex h-12 w-12 items-center justify-center rounded-xl border border-[#bbdec6]/10 bg-[#bbdec6]/[0.05] text-[#bbdec6]">

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="1.6" class="h-5 w-5">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7l7-4Z" />

              <path stroke-linecap="round" stroke-linejoin="round" d="M9.5 12l1.7 1.7 3.5-3.5" />
            </svg>

          </div>

          <h3 class="mt-7 text-base font-medium">
            Inteligência Defensiva
          </h3>

          <p class="mt-4 max-w-xs text-xs leading-8 tracking-[0.01em] text-white/30">
            Conecte informações e indicadores
            para compreender os principais riscos.
          </p>

        </article>

        <article
          class="group flex w-full max-w-sm flex-col items-center rounded-2xl border border-white/[0.07] bg-white/[0.025] p-8 text-center backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#bbdec6]/20 hover:bg-[#bbdec6]/[0.035]">

          <div
            class="flex h-12 w-12 items-center justify-center rounded-xl border border-[#bbdec6]/10 bg-[#bbdec6]/[0.05] text-[#bbdec6]">

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="1.6" class="h-5 w-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 12h4l2-6 4 12 2-6h6" />
            </svg>

          </div>

          <h3 class="mt-7 text-base font-medium">
            Tendências em Tempo Real
          </h3>

          <p class="mt-4 max-w-xs text-xs leading-8 tracking-[0.01em] text-white/30">
            Visualize mudanças importantes
            através de informações atualizadas.
          </p>

        </article>

      </div>

    </section>

    <section id="grafico" class="flex w-full flex-col items-center px-5 py-24 text-center sm:px-8 md:py-32 lg:px-12">

      <span class="text-[0.55rem] uppercase tracking-[0.25em] text-[#bbdec6]/65">
        Inteligência visual
      </span>

      <h2 class="mt-5 max-w-3xl text-3xl font-medium leading-[1.15] tracking-[-0.04em] sm:text-4xl md:text-5xl">
        Veja os dados
        <span class="text-[#bbdec6]">
          evoluírem.
        </span>
      </h2>

      <p class="mx-auto mt-6 max-w-2xl text-sm leading-8 tracking-[0.01em] text-white/35 sm:leading-9">
        Passe o mouse sobre cada ponto para descobrir
        como a informação evolui até chegar à decisão.
      </p>

      <div
        class="relative mt-14 flex w-full max-w-6xl justify-center rounded-3xl border border-white/[0.07] bg-white/[0.02] p-5 backdrop-blur-md sm:p-8">

        <div class="relative h-[21rem] w-full max-w-5xl sm:h-[28rem]">

          <svg viewBox="0 0 100 100" preserveAspectRatio="none" class="absolute inset-0 h-full w-full overflow-visible">

            <defs>

              <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">

                <stop offset="0%" stop-color="#5b8b75" />

                <stop offset="100%" stop-color="#bbdec6" />

              </linearGradient>

              <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">

                <stop offset="0%" stop-color="#bbdec6" stop-opacity="0.15" />

                <stop offset="100%" stop-color="#bbdec6" stop-opacity="0" />

              </linearGradient>

            </defs>

            <line x1="5" y1="82" x2="95" y2="82" stroke="rgba(255,255,255,0.08)" stroke-width="0.25" />

            <line x1="5" y1="62" x2="95" y2="62" stroke="rgba(255,255,255,0.05)" stroke-width="0.25" />

            <line x1="5" y1="42" x2="95" y2="42" stroke="rgba(255,255,255,0.05)" stroke-width="0.25" />

            <line x1="5" y1="22" x2="95" y2="22" stroke="rgba(255,255,255,0.05)" stroke-width="0.25" />

            <polygon points="12,76 32,62 52,68 72,42 90,20 90,82 12,82" fill="url(#areaGradient)" />

            <polyline points="12,76 32,62 52,68 72,42 90,20" fill="none" stroke="url(#lineGradient)" stroke-width="0.8"
              stroke-linecap="round" stroke-linejoin="round" />

            <g v-for="point in graphPoints" :key="point.id">

              <circle :cx="point.x" :cy="point.y" r="3" fill="#bbdec6" fill-opacity="0.1" />

              <circle :cx="point.x" :cy="point.y" r="1.4" fill="#bbdec6" class="cursor-pointer" :class="[
                activePoint?.id === point.id
                  ? 'stroke-[#ffffff] stroke-[0.5]'
                  : ''
              ]" @mouseenter="ativarPonto(point)" @mouseleave="desativarPonto"
                @click="ativarPonto(point)" />

            </g>

          </svg>

          <div v-if="activePoint"
            class="absolute z-20 w-[15rem] -translate-x-1/2 -translate-y-[115%] rounded-2xl border border-[#bbdec6]/20 bg-[#07100d]/95 p-4 text-left shadow-[0_1rem_3rem_rgba(0,0,0,0.45)] backdrop-blur-xl sm:w-[18rem]"
            :style="{
              left: `${activePoint.x}%`,
              top: `${activePoint.y}%`
            }">

            <div class="flex items-center gap-2">

              <span
                class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#bbdec6]/10 text-[0.55rem] font-semibold text-[#bbdec6]">
                {{ activePoint.number }}
              </span>

              <div>

                <span class="block text-[0.5rem] uppercase tracking-[0.15em] text-[#bbdec6]/60">
                  Benefício
                </span>

                <strong class="mt-1 block text-sm font-medium text-white">
                  {{ activePoint.title }}
                </strong>

              </div>

            </div>

            <p class="mt-4 text-xs leading-7 tracking-[0.01em] text-white/50">
              {{ activePoint.benefit }}
            </p>

          </div>

        </div>

      </div>

    </section>

    <section id="recursos" class="flex w-full flex-col items-center px-5 py-24 text-center sm:px-8 md:py-32 lg:px-12">

      <span class="text-[0.55rem] uppercase tracking-[0.25em] text-[#bbdec6]/65">
        Recursos
      </span>

      <h2 class="mt-5 max-w-3xl text-3xl font-medium leading-[1.15] tracking-[-0.04em] sm:text-4xl md:text-5xl">
        Dados que fazem
        <span class="text-[#bbdec6]">
          sentido.
        </span>
      </h2>

      <p class="mx-auto mt-6 max-w-2xl text-sm leading-8 tracking-[0.01em] text-white/35 sm:leading-9">
        Visualize informações complexas de forma simples,
        organizada e pronta para apoiar sua operação.
      </p>

      <div class="mx-auto mt-14 flex w-full max-w-5xl flex-col items-center justify-center gap-5 md:flex-row">

        <div
          class="relative flex min-h-[20rem] w-full flex-col items-center justify-center overflow-hidden rounded-3xl border border-white/[0.07] bg-gradient-to-br from-[#10231d]/70 via-[#07100d]/80 to-[#010300] p-8 text-center">

          <div class="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#bbdec6]/10 blur-3xl"></div>

          <span class="text-[0.55rem] uppercase tracking-[0.2em] text-[#bbdec6]/60">
            Visualização
          </span>

          <h3 class="mt-5 max-w-md text-2xl font-medium leading-[1.2]">
            Encontre padrões
            <span class="text-[#bbdec6]">
              onde antes havia ruído.
            </span>
          </h3>

          <p class="mt-5 max-w-md text-xs leading-8 tracking-[0.01em] text-white/30">
            Dashboards organizados para facilitar
            a leitura dos principais indicadores.
          </p>

        </div>

        <div
          class="relative flex min-h-[20rem] w-full flex-col items-center justify-center overflow-hidden rounded-3xl border border-white/[0.07] bg-gradient-to-br from-[#091816]/70 via-[#07100d]/80 to-[#010300] p-8 text-center">

          <div class="absolute bottom-6 right-8 flex items-end gap-2 opacity-50">

            <div class="h-12 w-3 rounded-t bg-[#bbdec6]/20"></div>
            <div class="h-20 w-3 rounded-t bg-[#bbdec6]/30"></div>
            <div class="h-16 w-3 rounded-t bg-[#bbdec6]/40"></div>
            <div class="h-28 w-3 rounded-t bg-[#bbdec6]/60"></div>
            <div class="h-36 w-3 rounded-t bg-[#bbdec6]/80"></div>

          </div>

          <span class="text-[0.55rem] uppercase tracking-[0.2em] text-[#bbdec6]/60">
            Inteligência
          </span>

          <h3 class="mt-5 max-w-md text-2xl font-medium leading-[1.2]">
            Decisões baseadas
            <span class="text-[#bbdec6]">
              em contexto.
            </span>
          </h3>

          <p class="mt-5 max-w-md text-xs leading-8 tracking-[0.01em] text-white/30">
            Reúna informações relevantes e acompanhe
            os sinais que realmente importam.
          </p>

        </div>

      </div>

    </section>

    <section id="sobre" class="flex w-full justify-center px-5 py-10 sm:px-8 lg:px-12">

      <div
        class="relative flex min-h-[23rem] w-full max-w-6xl items-center justify-center overflow-hidden rounded-3xl border border-[#bbdec6]/10 bg-[#071311]/70 px-6 py-12 text-center">

        <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(187,222,198,0.14),transparent_48%)]">
        </div>

        <div class="relative z-10 flex w-full max-w-3xl flex-col items-center">

          <span class="text-[0.55rem] uppercase tracking-[0.25em] text-[#bbdec6]/65">
            InCTI Insights
          </span>

          <h2 class="mt-5 text-3xl font-medium leading-[1.15] tracking-[-0.04em] sm:text-4xl md:text-5xl">
            Pronto para elevar
            <span class="text-[#bbdec6]">
              sua inteligência?
            </span>
          </h2>

          <p class="mt-6 max-w-xl text-sm leading-8 tracking-[0.01em] text-white/35 sm:leading-9">
            Transforme dados em contexto, contexto em inteligência
            e inteligência em decisões.
          </p>

          <router-link to="/login"
            class="mt-9 flex h-13 w-full max-w-xs items-center justify-center gap-2 rounded-xl bg-[#bbdec6] px-7 text-sm font-semibold text-[#010300] transition hover:bg-white sm:w-auto">
            Solicitar acesso
            <span>
              →
            </span>
          </router-link>

        </div>

      </div>

    </section>

    <Footer />

  </main>
</template>