<template>
    <main class="login-page">
        <div class="login-overlay"></div>

        <div class="login-container">

            <section class="login-info">
                <p class="text-[#bbdec6] text-[0.55rem] uppercase tracking-[0.3em] font-medium">
                    Plataforma analítica
                </p>

                <h1 class="text-white text-[1.8rem] font-medium leading-[1.15] mt-3">
                    Enxergue os sinais
                    <br>
                    por trás do ruído.
                </h1>
            </section>

            <section class="login-card">

                <div class="flex items-center gap-2 mb-6">
                    <img
                        src="../assets/icons/logo.png"
                        alt="InCTI"
                        class="w-[1.75rem] h-[1.75rem] object-contain"
                    >

                    <span class="text-white text-sm font-semibold tracking-wide">
                        InCTI
                    </span>
                </div>

                <div class="mb-6">
                    <h2 class="text-white text-[1.35rem] font-semibold">
                        Bem-vindo de volta
                    </h2>

                    <p class="text-white/45 text-[0.7rem] mt-2">
                        Entre com seus dados para acessar sua conta.
                    </p>
                </div>

                <form class="flex flex-col gap-4">

                    <div class="flex flex-col gap-2">
                        <label
                            for="email"
                            class="text-white/60 text-[0.6rem] uppercase tracking-[0.12em]"
                        >
                            E-mail
                        </label>

                        <input
                            id="email"
                            type="email"
                            placeholder="voce@empresa.com"
                            class="email-input"
                        >
                    </div>

                    <div class="flex flex-col gap-2">
                        <label
                            for="password"
                            class="text-white/60 text-[0.6rem] uppercase tracking-[0.12em]"
                        >
                            Senha
                        </label>

                        <div class="password-wrapper">
                            <Password
                                v-model="password"
                                inputId="password"
                                placeholder="••••••••"
                                :feedback="false"
                                toggleMask
                            />
                        </div>
                    </div>

                    <div class="flex items-center justify-between mt-1">
                        <label class="flex items-center gap-2 text-white/45 text-[0.6rem]">
                            <input
                                type="checkbox"
                                class="w-[0.75rem] h-[0.75rem] accent-[#bbdec6]"
                            >

                            Lembrar de mim
                        </label>

                        <a
                            href="#"
                            class="text-[#bbdec6] text-[0.6rem] hover:underline"
                        >
                            Esqueceu a senha?
                        </a>
                    </div>

                    <button
                        type="submit"
                        class="w-full h-[2.75rem] flex items-center justify-center rounded-md bg-[#bbdec6] text-[#010300] text-[0.7rem] font-semibold hover:bg-white transition mt-1"
                    >
                        Entrar

                        <span class="ml-2">
                            →
                        </span>
                    </button>

                </form>

                <div class="flex items-center gap-3 my-5">
                    <div class="h-px flex-1 bg-white/[0.08]"></div>

                    <span class="text-white/25 text-[0.55rem]">
                        ou continue com
                    </span>

                    <div class="h-px flex-1 bg-white/[0.08]"></div>
                </div>

                <div class="grid grid-cols-2 gap-3">
                    <button
                        type="button"
                        class="h-[2.25rem] flex items-center justify-center rounded-md border border-white/[0.1] text-white/60 text-[0.6rem] hover:bg-white/[0.05] hover:text-white transition"
                    >
                        Google
                    </button>

                    <button
                        type="button"
                        class="h-[2.25rem] flex items-center justify-center rounded-md border border-white/[0.1] text-white/60 text-[0.6rem] hover:bg-white/[0.05] hover:text-white transition"
                    >
                        Apple
                    </button>
                </div>

                <p class="text-center text-white/25 text-[0.55rem] mt-5">
                    Ainda não tem uma conta?

                    <router-link
                        to="/"
                        class="text-[#bbdec6] ml-1 hover:underline"
                    >
                        Saiba mais
                    </router-link>
                </p>

            </section>

        </div>
    </main>
</template>

<script setup>
import { ref } from 'vue'
import Password from 'primevue/password'

const password = ref('')
</script>

<style scoped>
.login-page {
    display: flex;
    width: 100%;
    height: 100vh;
    background-image: url('../assets/images/BackgroundLogin.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    overflow: hidden;
}

.login-overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    background: rgba(1, 3, 0, 0.28);
}

.login-container {
    display: flex;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
    align-items: center;
    justify-content: center;
    gap: 6rem;
    padding: 2rem;
}

.login-info {
    display: flex;
    width: 28rem;
    height: 20rem;
    flex-direction: column;
    justify-content: flex-end;
}

.login-card {
    display: flex;
    width: 24rem;
    flex-direction: column;
    padding: 2rem;
    background: rgba(1, 3, 0, 0.78);
    border: 0.0625rem solid rgba(255, 255, 255, 0.08);
    border-radius: 0.75rem;
    backdrop-filter: blur(0.8rem);
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.35);
}

.email-input {
    display: flex;
    width: 100%;
    height: 2.5rem;
    padding: 0 0.75rem;
    border-radius: 0.375rem;
    background: rgba(255, 255, 255, 0.04);
    border: 0.0625rem solid rgba(255, 255, 255, 0.1);
    color: white;
    font-size: 0.7rem;
    outline: none;
}

.email-input::placeholder {
    color: rgba(255, 255, 255, 0.2);
}

.email-input:focus {
    border-color: #bbdec6;
}

.password-wrapper {
    display: flex;
    width: 100%;
    height: 2.5rem;
    position: relative;
}

.password-wrapper :deep(.p-password) {
    display: flex;
    width: 100%;
    height: 2.5rem;
    position: relative;
}

.password-wrapper :deep(.p-password-input) {
    display: flex;
    width: 100%;
    height: 2.5rem;
    padding: 0 2.75rem 0 0.75rem;
    border-radius: 0.375rem;
    background: rgba(255, 255, 255, 0.04);
    border: 0.0625rem solid rgba(255, 255, 255, 0.1);
    color: white;
    font-size: 0.7rem;
    outline: none;
}

.password-wrapper :deep(.p-password-input::placeholder) {
    color: rgba(255, 255, 255, 0.2);
}

.password-wrapper :deep(.p-password-input:focus) {
    border-color: #bbdec6;
    box-shadow: none;
}

.password-wrapper :deep(.p-password-toggle-mask) {
    position: absolute;
    right: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.25rem;
    height: 1.25rem;
    margin: 0;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
    z-index: 10;
}

.password-wrapper :deep(.p-password-toggle-mask-icon) {
    width: 0.9rem;
    height: 0.9rem;
    color: rgba(255, 255, 255, 0.45);
}

.password-wrapper :deep(.p-password-toggle-mask-icon:hover) {
    color: #bbdec6;
}

@media (max-width: 56.25rem) {
    .login-container {
        gap: 3rem;
        padding: 2rem;
    }

    .login-info {
        width: 20rem;
    }

    .login-card {
        width: 22rem;
    }
}

@media (max-width: 40rem) {
    .login-container {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
        padding: 1.5rem;
    }

    .login-info {
        display: none;
    }

    .login-card {
        width: 100%;
        max-width: 24rem;
        padding: 1.75rem;
    }
}

@media (max-width: 25rem) {
    .login-container {
        padding: 1rem;
    }

    .login-card {
        width: 100%;
        padding: 1.5rem;
    }
}
</style>