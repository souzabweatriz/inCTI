<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const aberta = ref(true)
const route = useRoute()
const router = useRouter()

const itens = [
    {
        nome: 'Dashboard',
        rota: '/dashboard',
        icone: 'dashboard'
    },
    {
        nome: 'Insights',
        rota: '/dashboard/relatorios',
        icone: 'insights'
    },
    {
        nome: 'Upload de dados',
        rota: '/dashboard/upload',
        icone: 'upload'
    }
]

function navegar(rota) {
    router.push(rota)
}
</script>

<template>
    <aside :class="[
        'sticky left-0 top-0 z-50 flex h-screen shrink-0 flex-col border-r border-[#5A7F78]/20 bg-[#050807]/95 shadow-2xl shadow-black/30 backdrop-blur-xl transition-all duration-300',
        aberta ? 'w-64' : 'w-[76px]'
    ]">
        <div class="flex h-20 items-center border-b border-[#5A7F78]/20 px-4"
            :class="aberta ? 'justify-between' : 'justify-center'">
            <div v-if="aberta" class="flex items-center gap-3">
                <div
                    class="flex h-10 w-10 items-center justify-center rounded-xl border border-[#BBDEC6]/20 bg-[#BBDEC6]/10">
                    <img src="../assets/icons/logo.png" alt="InCTI" class="h-7 w-auto object-contain" />
                </div>

                <div>
                    <p class="text-sm font-semibold tracking-wide text-[#F7F8FC]">
                        InCTI
                    </p>

                    <p class="text-[10px] uppercase tracking-[0.2em] text-[#5A7F78]">
                        Intelligence
                    </p>
                </div>
            </div>

            <button type="button"
                class="flex h-10 w-10 items-center justify-center rounded-xl border border-[#5A7F78]/20 bg-[#314C53]/15 text-[#BBDEC6] transition hover:border-[#BBDEC6]/30 hover:bg-[#BBDEC6]/10"
                @click="aberta = !aberta">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="1.7" class="h-5 w-5 transition-transform duration-300"
                    :class="!aberta ? 'rotate-180' : ''">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m15 18-6-6 6-6" />
                </svg>
            </button>
        </div>

        <nav class="flex-1 space-y-2 overflow-y-auto px-3 py-6">
            <button v-for="item in itens" :key="item.rota" type="button"
                class="group relative flex w-full items-center rounded-xl text-left transition-all duration-200" :class="[
                    route.path === item.rota
                        ? 'bg-[#BBDEC6]/10 text-[#BBDEC6] shadow-[inset_3px_0_0_#BBDEC6]'
                        : 'text-[#BBDEC6]/50 hover:bg-[#314C53]/20 hover:text-[#F7F8FC]',
                    aberta ? 'gap-4 px-4 py-3.5' : 'justify-center px-0 py-3.5'
                ]" @click="navegar(item.rota)">
                <span class="flex h-5 w-5 shrink-0 items-center justify-center">
                    <svg v-if="item.icone === 'dashboard'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="1.6" class="h-5 w-5">
                        <rect x="4" y="4" width="6" height="6" rx="1" />
                        <rect x="14" y="4" width="6" height="6" rx="1" />
                        <rect x="4" y="14" width="6" height="6" rx="1" />
                        <rect x="14" y="14" width="6" height="6" rx="1" />
                    </svg>

                    <svg v-else-if="item.icone === 'insights'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="1.6" class="h-5 w-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 19V5m0 14h16M8 16v-5m4 5V7m4 9V9" />
                    </svg>

                    <svg v-else-if="item.icone === 'upload'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="1.6" class="h-5 w-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 16V4m0 0 4 4m-4-4-4 4" />
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
                    </svg>

                    <svg v-else-if="item.icone === 'grid'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="1.6" class="h-5 w-5">
                        <rect x="4" y="4" width="6" height="6" rx="1" />
                        <rect x="14" y="4" width="6" height="6" rx="1" />
                        <rect x="4" y="14" width="6" height="6" rx="1" />
                        <rect x="14" y="14" width="6" height="6" rx="1" />
                    </svg>

                    <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="1.6" class="h-5 w-5">
                        <circle cx="12" cy="12" r="9" />
                        <path stroke-linecap="round" d="M12 10v6M12 7.5h.01" />
                    </svg>
                </span>

                <span v-if="aberta" class="whitespace-nowrap text-sm font-medium">
                    {{ item.nome }}
                </span>

                <span v-if="!aberta"
                    class="pointer-events-none absolute left-[68px] z-50 whitespace-nowrap rounded-lg border border-[#5A7F78]/30 bg-[#0a110d] px-3 py-2 text-xs font-medium text-[#F7F8FC] opacity-0 shadow-xl transition group-hover:opacity-100">
                    {{ item.nome }}
                </span>
            </button>
        </nav>

        <div class="border-t border-[#5A7F78]/20 p-3">
            <div class="flex items-center rounded-xl bg-[#314C53]/15"
                :class="aberta ? 'gap-3 px-3 py-3' : 'justify-center py-3'">
                <div
                    class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#BBDEC6]/10 text-sm font-semibold text-[#BBDEC6]">
                    I
                </div>

                <div v-if="aberta" class="min-w-0">
                    <p class="truncate text-sm font-medium text-[#F7F8FC]">
                        InCTI
                    </p>

                    <p class="truncate text-[11px] text-[#5A7F78]">
                        Data Intelligence
                    </p>
                </div>
            </div>
        </div>
    </aside>
</template>