<template>
  <header class="fixed top-0 left-0 w-full z-50 bg-[#010300]">
    <nav class="flex items-center justify-center gap-20 h-16 px-10">
      <router-link to="/">
        <div class="flex items-center gap-2">
          <img
            src="../assets/icons/logo.png"
            alt="Logo"
            class="w-10 h-10 object-contain"
          />

          <p class="text-white text-xl font-semibold tracking-wide">InCTI</p>
        </div>
      </router-link>

      <!-- Links -->
      <div class="flex items-center gap-8">
        <a href="#plataforma" class="text-white text-sm hover:text-[#bbdec6] transition">
          Plataforma
        </a>

        <a href="#insights" class="text-white text-sm hover:text-[#bbdec6] transition">
          Insights
        </a>

        <a href="#sobre" class="text-white text-sm hover:text-[#bbdec6] transition">
          Sobre
        </a>
      </div>
      <div class="flex items-center gap-4">
        <router-link
          to="/login"
          class="w-26 h-9 flex items-center justify-center rounded-full bg-[#314c53] text-white text-base font-medium hover:bg-[#5a7f78] transition"
        >
          Entrar
        </router-link>
      </div>
    </nav>
  </header>
</template>
