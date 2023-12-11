import { Nav } from "./components/Nav"
import { CustomerReviews, Subscribe, Footer, Service, PopularProducts, SpecialOffers, SuperQuality, Hero } from "./sections"

export const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding">
      <Service />
    </section>
    <section className="padding">
      <SpecialOffers />
    </section>
    <section className="padding bg-blue-50">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="padding-x padding-t pb-8 bg-black text-white">
      <Footer />
    </section>
  </main>
)