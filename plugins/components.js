import Vue from 'vue'
import Page from '@/components/PostTypes/Page.vue'
import Global from '@/components/PostTypes/Global.vue'
import Location from '@/components/PostTypes/Location.vue'

import HeaderNav from '@/components/Nav/BlokHeaderNav.vue'
import HeaderDesktop from '@/components/Nav/BlokHeaderDesktop.vue'
import HeaderDesktopLinksPrimary from '@/components/Nav/BlokHeaderDesktopLinksPrimary.vue'
// import HeaderDesktopLinksSecondary from '@/components/Nav/BlokHeaderDesktopLinksPrimay.vue'
import HeaderDesktopLinksButton from '@/components/Nav/BlokHeaderDesktopLinksButton.vue'
import HeaderMobile from '@/components/Nav/BlokHeaderMobile.vue'

import FooterNav from '@/components/Footer/BlokDarkFooter.vue'
import FooterCols from '@/components/Footer/BlokFooterCols.vue'
import FooterLinks from '@/components/Footer/BlokFooterLinks.vue'


import Hero from '@/components/Hero/BlokHero.vue'
import BlokOrderBanner from '@/components/OrderBanner/BlokOrderBanner.vue'
import BlokNewsletter from '@/components/Newsletter/BlokNewsletter.vue'
import BlokDeals from '@/components/Deals/BlokDeals.vue'
import BlokDealCard from '@/components/Deals/BlokDealCard.vue'
import BlokFoodCarousel from '@/components/Carousel/BlokFoodCarousel.vue'
import FoodCarouselCard from '@/components/Carousel/BlokFoodCarouselCard.vue'
import GoogleMaps from '@/components/GoogleMaps/BlokGoogleMaps.vue'


Vue.component('blok-page', Page)
Vue.component('global', Global)
Vue.component('blok-global', Global)
Vue.component('blok-location', Location)
Vue.component('hero', Hero)
Vue.component('order-banner', BlokOrderBanner)
Vue.component('newsletter', BlokNewsletter)
Vue.component('deals', BlokDeals)
Vue.component('blok-deal-card', BlokDealCard)
Vue.component('food-carousel', BlokFoodCarousel)
Vue.component('blok-food-carousel-card', FoodCarouselCard)
Vue.component('g-maps', GoogleMaps)

Vue.component('blok-header-nav', HeaderNav)
Vue.component('blok-header-desktop', HeaderDesktop)
Vue.component('blok-header-desktop-links-primary', HeaderDesktopLinksPrimary)
Vue.component('blok-header-desktop-links-button', HeaderDesktopLinksButton)
Vue.component('blok-header-mobile',HeaderMobile)

Vue.component('header-nav', HeaderNav)
Vue.component('header-desktop', HeaderDesktop)
Vue.component('header-desktop-links-primary', HeaderDesktopLinksPrimary)
Vue.component('header-desktop-links-button', HeaderDesktopLinksButton)
Vue.component('header-mobile',HeaderMobile)

Vue.component('blok-footer-nav', FooterNav)
Vue.component('blok-footer-cols', FooterCols)
Vue.component('blok-footer-links', FooterLinks)

Vue.component('footer-nav', FooterNav)
Vue.component('footer-cols', FooterCols)
Vue.component('footer-links', FooterLinks)