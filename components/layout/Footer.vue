<template>
    <div class="footer bg-gray-800">
        <div class="container">
            <div class="footer-content flex justify-between items-start">
                <img src="~/assets/images/logo.svg" alt="logo" />
                <div v-for="(list, index) in lists" :key="index" class="footer-list">
                    <div>
                        <div class="footer-list-title">{{ list.name }}</div>
                        <div v-for="(link, index) in list.links" :key="index" class="footer-list-link">
                            <a :href="link.href">{{ link.name }}</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex items-center justify-between">
                <div class="copyright">© All rights reserved. Made by <strong>Harasya Studio</strong></div>
                <img src="~/assets/images/payment-methods.svg" alt="payment methods" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const lists = computed(() => [
    {
        name: 'About',
        links: [
            {
                name: 'About Us',
                href: '#'
            },
            {
                name: 'Careers',
                href: '#'
            },
            {
                name: 'Press Releases',
                href: '#'
            },
            {
                name: 'Blog',
                href: '#'
            },
        ]
    },
    {
        name: 'Support',
        links: [
            {
                name: 'Help Center',
                href: '#'
            },
            {
                name: 'Contact Us',
                href: '#'
            },
            {
                name: 'FAQ',
                href: '#'
            },
            {
                name: 'Privacy Policy',
                href: '#'
            },
        ]
    },
    {
        name: 'Social',
        links: [
            {
                name: 'Facebook',
                href: '#'
            },
            {
                name: 'Twitter',
                href: '#'
            },
            {
                name: 'Instagram',
                href: '#'
            },
            {
                name: 'Youtube',
                href: '#'
            },
        ]
    },
])
</script>

<style lang="postcss" scoped>
.footer {
    color: #fff;
    padding-top: 72px;
    padding-bottom: 24px;
    .copyright {
        font-size: 12px;
        font-weight: 400;
    }
    &-content {
        padding-bottom: 72px;
    }
    &-list {
        &-title {
            font-size: 16px;
            font-weight: 500;
            margin-bottom: 16px;
        }
        &-link {
            font-size: 14px;
            margin-bottom: 8px;
            a {
                color: #fff;
                text-decoration: none;
                &:hover {
                    color: #ddd;
                }
            }
        }
    }
}
</style>