<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/authStore'

const usuario = ref('')
const senha = ref('')
const mensagem = ref('')
const showPassword = ref(false)

const router = useRouter()
const auth = useAuthStore()

function entrar() {
    mensagem.value = ''

    if (auth.login(usuario.value, senha.value)) {
        router.push('/upload')
    } else {
        mensagem.value = 'Preencha usuário e senha.'
    }
}
</script>

<template>
    <main class="login-page flex w-full h-screen relative overflow-hidden">

        <div class="absolute inset-0 w-full h-full bg-[#010300]/[0.28]"></div>

        <div class="relative z-[1] flex w-full h-full items-center justify-center gap-12 lg:gap-24 p-6 sm:p-8">

            <section class="hidden sm:flex w-[20rem] lg:w-[28rem] h-80 flex-col justify-end">

                <p class="text-[#bbdec6] text-[0.55rem] uppercase tracking-[0.3em] font-medium">
                    Plataforma analítica
                </p>

                <h1 class="text-white text-[1.8rem] font-medium leading-[1.15] mt-3">
                    Enxergue os sinais
                    <br>
                    por trás do ruído.
                </h1>

            </section>

            <section
                class="login-card flex flex-col rounded-xl bg-[#010300]/[0.78] border border-white/[0.08] backdrop-blur-md shadow-[0_1rem_3rem_rgba(0,0,0,0.35)]">
                <div class="login-card-content">
                <div class="flex items-center gap-2 mb-6">

                    <img src="../assets/icons/logo.png" alt="InCTI" class="flex w-7 h-7 object-contain">

                    <span class="text-white text-sm font-semibold tracking-wide">
                        InCTI
                    </span>

                </div>

                <div class="flex flex-col mb-6">

                    <h2 class="text-white text-[1.35rem] font-semibold">
                        Bem-vindo de volta
                    </h2>

                    <p class="text-white/45 text-[0.7rem] mt-2">
                        Entre com seus dados para acessar sua conta.
                    </p>

                </div>

                <form class="flex flex-col gap-4" @submit.prevent="entrar">

                    <div class="flex flex-col gap-2">

                        <label for="usuario" class="text-white/60 text-[0.6rem] uppercase tracking-[0.12em]">
                            Usuário
                        </label>

                        <input id="usuario" v-model="usuario" type="text" placeholder="voce@empresa.com"
                            class="flex w-full h-10 px-4 rounded-md bg-white/[0.04] border border-white/10 text-white text-[0.7rem] outline-none placeholder:text-white/20 focus:border-[#bbdec6] transition">

                    </div>

                    <div class="flex flex-col gap-2">

                        <label for="senha" class="text-white/60 text-[0.6rem] uppercase tracking-[0.12em]">
                            Senha
                        </label>

                        <div
                            class="flex w-full h-10 items-center gap-2 rounded-md bg-white/[0.04] border border-white/10 focus-within:border-[#bbdec6] transition">

                            <input id="senha" v-model="senha" :type="showPassword ? 'text' : 'password'"
                                placeholder="••••••••"
                                class="flex w-full h-full min-w-0 flex-1 px-4 bg-transparent border-0 text-white text-[0.7rem] outline-none placeholder:text-white/20">

                            <button type="button"
                                class="flex w-6 h-6 shrink-0 items-center justify-center p-0 m-0 border-0 bg-transparent text-white/45 hover:text-[#bbdec6] cursor-pointer transition"
                                @click="showPassword = !showPassword">

                                <svg v-if="showPassword" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="1.7"
                                    class="w-[0.95rem] h-[0.95rem]">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M2.25 12s3.5-6 9.75-6 9.75 6 9.75 6-3.5 6-9.75 6-9.75-6-9.75-6Z" />

                                    <circle cx="12" cy="12" r="2.5" />
                                </svg>

                                <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="1.7" class="w-[0.95rem] h-[0.95rem]">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 3l18 18" />

                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M10.58 10.58a2 2 0 0 0 2.83 2.83" />

                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M9.88 5.09A10.72 10.72 0 0 1 12 4.88c6.25 0 9.75 7.12 9.75 7.12a17.74 17.74 0 0 1-3.13 3.9" />

                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M6.61 6.61C3.83 8.43 2.25 12 2.25 12s3.5 7.12 9.75 7.12a10.76 10.76 0 0 0 4.04-.78" />
                                </svg>

                            </button>

                        </div>

                    </div>

                    <div class="flex items-center justify-between mt-1">

                        <label class="flex items-center gap-2 text-white/45 text-[0.6rem]">

                            <input type="checkbox" class="flex w-3 h-3 accent-[#bbdec6]">

                            Lembrar de mim

                        </label>


                        <a href="#"
                        class="text-[#bbdec6] text-[0.6rem] hover:underline"
                        >
                        Esqueceu a senha?
                        </a>

                    </div>

                    <button type="submit"
                        class="flex w-full h-11 items-center justify-center rounded-md bg-[#bbdec6] text-[#010300] text-[0.7rem] font-semibold hover:bg-white transition mt-1">

                        Entrar

                        <span class="ml-2">
                            →
                        </span>

                    </button>

                    <p v-if="mensagem" class="flex text-[#ff8f8f] text-[0.65rem]">
                        {{ mensagem }}
                    </p>

                </form>

                <div class="flex items-center gap-3 my-5">

                    <div class="flex h-px flex-1 bg-white/[0.08]"></div>

                    <span class="text-white/25 text-[0.55rem]">
                        ou continue com
                    </span>

                    <div class="flex h-px flex-1 bg-white/[0.08]"></div>

                </div>

                <div class="flex items-center gap-3">

                    <button type="button"
                        class="flex flex-1 h-9 items-center justify-center rounded-md border border-white/10 text-white/60 text-[0.6rem] hover:bg-white/[0.05] hover:text-white transition">
                        Google
                    </button>

                    <button type="button"
                        class="flex flex-1 h-9 items-center justify-center rounded-md border border-white/10 text-white/60 text-[0.6rem] hover:bg-white/[0.05] hover:text-white transition">
                        Apple
                    </button>

                </div>

                <p class="flex items-center justify-center text-white/25 text-[0.55rem] mt-5">

                    Ainda não tem uma conta?

                    <router-link to="/" class="text-[#bbdec6] ml-1 hover:underline">
                        Saiba mais
                    </router-link>

                </p>

                </div>

            </section>

        </div>

    </main>
</template>

<style scoped>
.login-page {
    background-image: url('../assets/images/BackgroundLogin.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.login-card {
    width: min(34rem, calc(100vw - 2rem));
    padding: 3rem;
}

.login-card-content {
    width: 24rem;
    max-width: 100%;
    margin: 0 auto;
}

@media (max-width: 640px) {
    .login-card {
        padding: 2rem;
    }
}
</style>