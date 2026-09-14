<template>
    <header class="header">

        <nav class="header-nav">

            <a
                href="#inicio"
                class="logo"
            >
                <img
                    src="../assets/icons/logo.png"
                    alt="Logo InCTI"
                >

                <span>
                    InCTI
                </span>
            </a>

            <div class="nav-links">

                <a href="#plataforma">
                    Plataforma
                </a>

                <a href="#insights">
                    Insights
                </a>

                <a href="#sobre">
                    Sobre
                </a>

            </div>

            <a
                href="/login"
                class="login-button"
            >
                Entrar
            </a>

        </nav>

    </header>
</template>

<style scoped>
.header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;
    width: 100%;
    height: 4rem;
    background: rgba(1, 3, 0, 0.94);
    border-bottom: 0.0625rem solid rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(1rem);
}

.header-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: calc(100% - 5rem);
    max-width: 90rem;
    height: 4rem;
    margin: 0 auto;
}

.logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
}

.logo img {
    display: flex;
    width: 2.25rem;
    height: 2.25rem;
    object-fit: contain;
}

.logo span {
    color: #ffffff;
    font-size: 1.15rem;
    font-weight: 600;
    letter-spacing: 0.02em;
}

.nav-links {
    display: flex;
    align-items: center;
    gap: 2rem;
}

.nav-links a {
    position: relative;
    color: rgba(255, 255, 255, 0.65);
    font-size: 0.8rem;
    font-weight: 500;
    text-decoration: none;
    transition: color 0.3s ease;
}

.nav-links a::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -0.45rem;
    width: 0;
    height: 0.1rem;
    background: #bbdec6;
    transition: width 0.3s ease;
}

.nav-links a:hover {
    color: #ffffff;
}

.nav-links a:hover::after {
    width: 100%;
}

.login-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 7rem;
    height: 2.5rem;
    border: 0.0625rem solid rgba(90, 127, 120, 0.6);
    border-radius: 9999px;
    background: #314c53;
    color: #ffffff;
    font-size: 0.8rem;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.3s ease;
}

.login-button:hover {
    background: #5a7f78;
    border-color: #5a7f78;
    box-shadow: 0 0 1.5rem rgba(187, 222, 198, 0.12);
}

@media (max-width: 48rem) {
    .header-nav {
        width: calc(100% - 3rem);
    }

    .nav-links {
        gap: 1.25rem;
    }
}
</style>