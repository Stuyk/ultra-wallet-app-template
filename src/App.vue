<script setup lang="ts">
import { onMounted, ref } from 'vue';

let isWalletAvailable = ref<boolean>(false);
let username = ref<string | undefined>(undefined);
let key = ref<string | undefined>(undefined);
let errorMessage = ref<string | undefined>(undefined);

async function connectWallet() {
    errorMessage.value = undefined;
    const result = await ultra?.connect().catch((err) => {
        return err;
    });

    if (!result || result.status === 'fail' || result.status === 'error') {
        errorMessage.value = result?.message;
        return;
    }

    username.value = result.data.blockchainid;
    key.value = result.data.publicKey;
}

async function disconnectWallet() {
    await ultra?.disconnect();
    username.value = undefined;
    key.value = undefined;
}

onMounted(async () => {
    isWalletAvailable.value = typeof ultra === 'undefined' ? false : true;
});
</script>

<template>
    <div class="logo-wrapper">
        <img src="/logo.webp" class="logo" alt="Ultra Logo" />
    </div>
    <div class="content">
        <h3>Hello from Ultra!</h3>
        <!-- Connection Section -->
        <template v-if="!username">
            <template v-if="isWalletAvailable">
                <p v-if="errorMessage">{{ errorMessage }}</p>
                <p>Click below to connect with the wallet.</p>
                <button @click="connectWallet">Connect</button>
            </template>
            <template v-else>
                <p>It appears the wallet is not currently installed.</p>
            </template>
        </template>
        <!-- Finished Connection Section -->
        <template v-else>
            <p>{{ username }}</p>
            <p>{{ key }}</p>
            <button @click="disconnectWallet">Disconnect</button>
        </template>
    </div>
</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}
.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}

.content p {
    font-size: 18px;
}
</style>
