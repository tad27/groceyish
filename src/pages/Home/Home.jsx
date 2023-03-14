import {
  Hero,
  ExploreCategories,
  FeaturedProducts,
  CTACards,
  DailyBestSells,
  TrendingSection,
  AppBanner,
  Footer,
} from "./../../components";

function Home() {
  return (
    <div className="Home">
      <Hero />

      <main className="pt-24">
        {/* Explore Categories */}
        <ExploreCategories />
        {/* Featured Products */}
        <FeaturedProducts />
        {/* CTA section with two cards */}
        <CTACards />
        {/* Daily Best Sells */}
        <DailyBestSells />
        {/* Trending Sections */}
        <TrendingSection />

        {/* App Banner */}
        <AppBanner />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
