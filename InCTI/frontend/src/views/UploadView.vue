<script setup>
import { ref } from 'vue'
import { useUploadStore } from '../stores/uploadStore'

const store = useUploadStore()

const fileInput = ref(null)
const isDragging = ref(false)

function escolherArquivo(event) {
    const file = event.target.files?.[0]
    event.target.value = ''

    if (file) {
        store.lerArquivo(file)
    }
}

function abrirSeletor() {
    fileInput.value?.click()
}

function onDragOver() {
    isDragging.value = true
}

function onDragLeave() {
    isDragging.value = false
}

function onDrop(event) {
    isDragging.value = false

    const file = event.dataTransfer.files?.[0]

    if (file) {
        store.lerArquivo(file)
    }
}

function formatarTamanho(bytes) {
    if (!bytes && bytes !== 0) return ''

    const kb = bytes / 1024

    if (kb < 1024) return `${kb.toFixed(1)} KB`

    return `${(kb / 1024).toFixed(1)} MB`
}
</script>

<template>
    <div class="min-h-screen w-full bg-[#010300] text-[#F7F8FC]">
        <section class="relative min-h-screen overflow-hidden">
            <div
                class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(187,222,198,0.10),transparent_28%),radial-gradient(circle_at_85%_20%,rgba(90,127,120,0.12),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(49,76,83,0.18),transparent_40%)]"
            ></div>

            <div
                class="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-5 py-12 sm:px-8 lg:px-12"
            >
                <div class="mx-auto w-full max-w-4xl text-center">
                    <div
                        class="mb-5 inline-flex items-center gap-2 rounded-full border border-[#5A7F78]/40 bg-[#314C53]/20 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#BBDEC6] backdrop-blur"
                    >
                        <span
                            class="h-2 w-2 rounded-full bg-[#BBDEC6] shadow-[0_0_12px_rgba(187,222,198,0.7)]"
                        ></span>

                        InCTI Data
                    </div>

                    <h1
                        class="text-3xl font-semibold tracking-tight text-[#F7F8FC] sm:text-4xl lg:text-5xl"
                    >
                        Envie sua planilha
                    </h1>

                    <p
                        class="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#BBDEC6]/60 sm:text-base"
                    >
                        Importe seus dados para começar a análise e transformar
                        informações brutas em insights inteligentes.
                    </p>
                </div>

                <div
                    class="mx-auto mt-12 grid w-full max-w-5xl gap-6 lg:grid-cols-[minmax(0,1fr)_270px]"
                >
                    <div
                        class="rounded-[28px] border border-[#5A7F78]/25 bg-[#0a110d]/80 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-7"
                    >
                        <input
                            ref="fileInput"
                            type="file"
                            accept=".xlsx,.xls,.csv"
                            class="hidden"
                            @change="escolherArquivo"
                        />

                        <div
                            role="button"
                            tabindex="0"
                            :class="
                                isDragging
                                    ? 'scale-[1.01] border-[#BBDEC6] bg-[#314C53]/30 shadow-[0_0_40px_rgba(187,222,198,0.08)]'
                                    : 'border-[#5A7F78]/30 bg-[#314C53]/10 hover:border-[#BBDEC6]/50 hover:bg-[#314C53]/15'
                            "
                            class="group flex min-h-[390px] cursor-pointer flex-col items-center justify-center rounded-[22px] border-2 border-dashed px-6 py-12 text-center transition-all duration-300"
                            @click="abrirSeletor"
                            @keydown.enter="abrirSeletor"
                            @dragover.prevent="onDragOver"
                            @dragleave.prevent="onDragLeave"
                            @drop.prevent="onDrop"
                        >
                            <div
                                class="flex h-20 w-20 items-center justify-center rounded-[24px] border border-[#BBDEC6]/20 bg-[#BBDEC6]/10 text-[#BBDEC6] shadow-[0_0_30px_rgba(187,222,198,0.06)] transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[#BBDEC6]/15"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="1.6"
                                    class="h-8 w-8"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M12 16V4m0 0 4 4m-4-4-4 4"
                                    />

                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"
                                    />
                                </svg>
                            </div>

                            <h2
                                class="mt-7 text-xl font-semibold text-[#F7F8FC]"
                            >
                                Arraste seu arquivo aqui
                            </h2>

                            <p
                                class="mt-3 max-w-md text-sm leading-7 text-[#BBDEC6]/55"
                            >
                                Ou clique para selecionar um arquivo do seu
                                computador.
                            </p>

                            <div
                                class="mt-4 flex items-center gap-2 text-[11px]"
                            >
                                <span
                                    class="rounded-full border border-[#5A7F78]/30 bg-[#314C53]/20 px-3 py-1.5 text-[#BBDEC6]/70"
                                >
                                    XLSX
                                </span>

                                <span
                                    class="rounded-full border border-[#5A7F78]/30 bg-[#314C53]/20 px-3 py-1.5 text-[#BBDEC6]/70"
                                >
                                    XLS
                                </span>

                                <span
                                    class="rounded-full border border-[#5A7F78]/30 bg-[#314C53]/20 px-3 py-1.5 text-[#BBDEC6]/70"
                                >
                                    CSV
                                </span>
                            </div>

                            <span
                                class="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#BBDEC6] px-6 py-3 text-sm font-semibold text-[#010300] shadow-lg shadow-[#BBDEC6]/10 transition-all duration-300 group-hover:bg-[#F7F8FC]"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="1.8"
                                    class="h-4 w-4"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M12 5v14M5 12h14"
                                    />
                                </svg>

                                {{
                                    store.carregando
                                        ? 'Lendo arquivo...'
                                        : 'Selecionar arquivo'
                                }}
                            </span>
                        </div>

                        <div
                            v-if="store.arquivo"
                            class="mt-5 flex flex-col gap-4 rounded-2xl border border-[#5A7F78]/25 bg-[#314C53]/10 p-4 sm:flex-row sm:items-center sm:justify-between"
                        >
                            <div class="flex min-w-0 items-center gap-4">
                                <div
                                    class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#BBDEC6]/10 text-[#BBDEC6]"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="1.6"
                                        class="h-5 w-5"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"
                                        />

                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M14 3v5h5"
                                        />
                                    </svg>
                                </div>

                                <div class="min-w-0">
                                    <p
                                        class="truncate text-sm font-semibold text-[#F7F8FC]"
                                    >
                                        {{ store.arquivo.name }}
                                    </p>

                                    <p
                                        class="mt-1 text-xs text-[#BBDEC6]/45"
                                    >
                                        {{
                                            formatarTamanho(
                                                store.arquivo.size
                                            )
                                        }}
                                    </p>
                                </div>
                            </div>

                            <button
                                type="button"
                                class="shrink-0 rounded-lg border border-[#5A7F78]/30 px-4 py-2 text-xs font-semibold text-[#BBDEC6] transition hover:border-[#BBDEC6]/50 hover:bg-[#BBDEC6]/10"
                                @click="abrirSeletor"
                            >
                                Trocar arquivo
                            </button>
                        </div>

                        <div
                            v-if="store.erro"
                            class="mt-5 flex items-start gap-3 rounded-2xl border border-red-400/20 bg-red-400/5 p-4"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.6"
                                class="mt-0.5 h-5 w-5 shrink-0 text-red-300"
                            >
                                <circle cx="12" cy="12" r="9" />

                                <path
                                    stroke-linecap="round"
                                    d="M12 8v5M12 16h.01"
                                />
                            </svg>

                            <p class="text-sm leading-6 text-red-200">
                                {{ store.erro }}
                            </p>
                        </div>

                        <div
                            v-if="store.carregando"
                            class="mt-5 h-1 overflow-hidden rounded-full bg-[#314C53]/40"
                        >
                            <div
                                class="h-full w-1/3 animate-pulse rounded-full bg-[#BBDEC6]"
                            ></div>
                        </div>
                    </div>

                    <aside
                        class="rounded-[28px] border border-[#5A7F78]/25 bg-[#0a110d]/80 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-7"
                    >
                        <div class="flex items-center justify-between">
                            <div>
                                <p
                                    class="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#5A7F78]"
                                >
                                    Resumo
                                </p>

                                <h3
                                    class="mt-2 text-lg font-semibold text-[#F7F8FC]"
                                >
                                    Dados carregados
                                </h3>
                            </div>

                            <div
                                class="flex h-10 w-10 items-center justify-center rounded-xl bg-[#BBDEC6]/10 text-[#BBDEC6]"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="1.6"
                                    class="h-5 w-5"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M4 19V5m0 14h16M8 16v-5m4 5V7m4 9V9"
                                    />
                                </svg>
                            </div>
                        </div>

                        <div class="mt-7 space-y-4">
                            <div
                                class="rounded-2xl border border-[#5A7F78]/20 bg-[#314C53]/10 p-5"
                            >
                                <p class="text-xs text-[#BBDEC6]/45">
                                    Linhas
                                </p>

                                <p
                                    class="mt-2 text-4xl font-semibold tracking-tight text-[#BBDEC6]"
                                >
                                    {{ store.totalLinhas }}
                                </p>

                                <p
                                    class="mt-1 text-xs text-[#BBDEC6]/35"
                                >
                                    registros carregados
                                </p>
                            </div>

                            <div
                                class="rounded-2xl border border-[#5A7F78]/20 bg-[#314C53]/10 p-5"
                            >
                                <p class="text-xs text-[#BBDEC6]/45">
                                    Colunas
                                </p>

                                <p
                                    class="mt-2 text-4xl font-semibold tracking-tight text-[#F7F8FC]"
                                >
                                    {{ store.totalColunas }}
                                </p>

                                <p
                                    class="mt-1 text-xs text-[#BBDEC6]/35"
                                >
                                    campos identificados
                                </p>
                            </div>
                        </div>

                        <button
                            v-if="store.dadosTratados.length"
                            type="button"
                            class="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-red-300/20 bg-red-400/5 px-4 py-3 text-sm font-semibold text-red-200 transition hover:bg-red-400/10"
                            @click="store.limpar()"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.6"
                                class="h-4 w-4"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M6 7h12M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m-8 0 1 12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1l1-12"
                                />
                            </svg>

                            Limpar dados
                        </button>
                    </aside>
                </div>

                <div
                    v-if="store.dadosTratados.length"
                    class="mx-auto mt-6 w-full max-w-5xl overflow-hidden rounded-[28px] border border-[#5A7F78]/25 bg-[#0a110d]/85 shadow-2xl shadow-black/30 backdrop-blur-xl"
                >
                    <div
                        class="flex flex-col gap-4 border-b border-[#5A7F78]/20 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8"
                    >
                        <div>
                            <div class="flex items-center gap-3">
                                <span
                                    class="h-2 w-2 rounded-full bg-[#BBDEC6] shadow-[0_0_10px_rgba(187,222,198,0.7)]"
                                ></span>

                                <h2
                                    class="text-lg font-semibold text-[#F7F8FC]"
                                >
                                    Prévia dos dados tratados
                                </h2>
                            </div>

                            <p
                                class="mt-2 text-sm text-[#BBDEC6]/45"
                            >
                                Mostrando até 10 de
                                {{ store.totalLinhas }} linhas.
                            </p>
                        </div>

                        <span
                            class="inline-flex w-fit items-center rounded-full border border-[#5A7F78]/30 bg-[#314C53]/20 px-4 py-2 text-xs font-semibold text-[#BBDEC6]"
                        >
                            {{ store.totalColunas }} colunas
                        </span>
                    </div>

                    <div class="overflow-x-auto">
                        <table class="min-w-full text-sm">
                            <thead>
                                <tr
                                    class="border-b border-[#5A7F78]/20 bg-[#314C53]/15"
                                >
                                    <th
                                        v-for="coluna in store.colunas"
                                        :key="coluna"
                                        class="whitespace-nowrap px-6 py-4 text-left text-[11px] font-semibold uppercase tracking-[0.15em] text-[#5A7F78]"
                                    >
                                        {{ coluna }}
                                    </th>
                                </tr>
                            </thead>

                            <tbody
                                class="divide-y divide-[#5A7F78]/10"
                            >
                                <tr
                                    v-for="(linha, indice) in store.dadosTratados.slice(
                                        0,
                                        10
                                    )"
                                    :key="indice"
                                    class="transition duration-200 hover:bg-[#BBDEC6]/5"
                                >
                                    <td
                                        v-for="coluna in store.colunas"
                                        :key="coluna"
                                        class="whitespace-nowrap px-6 py-4 text-[#BBDEC6]/65"
                                    >
                                        {{ linha[coluna] }}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div
                    class="mx-auto mt-6 flex w-full max-w-5xl flex-col gap-5 rounded-[28px] border border-[#BBDEC6]/15 bg-gradient-to-br from-[#314C53]/25 via-[#0a110d]/80 to-[#010300] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:flex-row sm:items-start sm:p-8"
                >
                    <div
                        class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#BBDEC6]/10 text-[#BBDEC6]"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.6"
                            class="h-6 w-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M13 3 4 14h6l-1 7 9-11h-6l1-7Z"
                            />
                        </svg>
                    </div>

                    <div>
                        <p
                            class="text-sm font-semibold uppercase tracking-[0.12em] text-[#BBDEC6]"
                        >
                         i     Próxima etapa
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>