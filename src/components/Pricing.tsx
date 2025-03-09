import { motion } from 'framer-motion';
import { useState } from 'react';

function PricingCard({ 
  title, 
  promo, 
  normal, 
  bonus, 
  coupon,
  featured = false,
  buyLink = "#"
}: { 
  title: string;
  promo: string;
  normal: string;
  bonus?: string;
  coupon?: string;
  featured?: boolean;
  buyLink?: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`bg-white rounded-xl shadow-lg overflow-hidden ${featured ? 'border-2 border-blue-500' : ''}`}
    >
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">{title}</h3>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-600">PROMO:</p>
            <p className="text-2xl font-bold text-blue-500">{promo}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Normal:</p>
            <p className="text-gray-400 line-through">{normal}</p>
          </div>
          {bonus && (
            <div>
              <p className="text-sm text-gray-600">Bonus:</p>
              <p className="text-blue-500">{bonus}</p>
            </div>
          )}
          {coupon && (
            <div>
              <p className="text-sm text-gray-600">Kupon:</p>
              <p className="bg-blue-100 text-blue-500 px-3 py-1 rounded inline-block">{coupon}</p>
            </div>
          )}
        </div>
        <a 
          href={buyLink}
          className={`block w-full mt-6 py-3 rounded-lg text-center transition-colors ${
            featured 
              ? 'bg-blue-500 text-white hover:bg-blue-600' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Beli
        </a>
      </div>
    </motion.div>
  );
}

export function Pricing() {
  const [activeTab, setActiveTab] = useState('tahunan');

  return (
    <section className="mb-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Mau mulai kapan lagi?</h2>
        <p className="text-gray-600">
          Bergabunglah dengan puluhan microstocker yang telah mempercayakan proses kerja mereka kepada tools otomatis ini.
        </p>
      </motion.div>

      <div className="flex justify-center gap-4 mb-12">
        <button 
          onClick={() => setActiveTab('tahunan')}
          className={`px-8 py-3 rounded-lg transition-colors ${
            activeTab === 'tahunan' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Tahunan
        </button>
        <button 
          onClick={() => setActiveTab('bulanan')}
          className={`px-8 py-3 rounded-lg transition-colors ${
            activeTab === 'bulanan' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Bulanan
        </button>
        <button 
          onClick={() => setActiveTab('trial')}
          className={`px-8 py-3 rounded-lg transition-colors ${
            activeTab === 'trial' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Trial & Free
        </button>
      </div>

      {activeTab === 'tahunan' && (
        <>
          <h3 className="text-2xl font-bold text-center mb-8">Tahunan</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PricingCard
              title="MidGen Lite"
              promo="957k"
              normal="1,367k"
              coupon="GETMIDGEN30"
              buyLink="https://my.grafisify.com/product/midgen-yearly/?_gl=1*11fv0y2*_ga*NDcwNzg2ODE4LjE2ODMxMTU3OTQ.*_ga_K643DSJKVJ*MTc0MTE4NDI5OS42My4xLjE3NDExODUwNTAuMC4wLjA."
            />
            <PricingCard
              title="MidGen Pro"
              promo="998k"
              normal="1,425k"
              bonus="MidBot 1 Tahun"
              coupon="GETMIDGEN30"
              featured={true}
              buyLink="https://my.grafisify.com/product/midgen-pro-1-year/?_gl=1*l19cl5*_ga*MTA2OTc2MjUyNy4xNzE5NzIxNzky*_ga_K643DSJKVJ*MTc0MTMzMTgxOC4zMS4wLjE3NDEzMzE4MzIuMC4wLjA."
            />
            <PricingCard
              title="MidBot"
              promo="147k"
              normal="409k"
              buyLink="https://my.grafisify.com/product/midbot-downloader-yearly/?_gl=1*l19cl5*_ga*MTA2OTc2MjUyNy4xNzE5NzIxNzky*_ga_K643DSJKVJ*MTc0MTMzMTgxOC4zMS4wLjE3NDEzMzE4MzIuMC4wLjA."
            />
            <PricingCard
              title="MetaExport - Image"
              promo="325k"
              normal="590k"
              coupon="ISICEPAT"
              buyLink="https://my.grafisify.com/product/metaexport-ai-1-year/"
            />
            <PricingCard
              title="MetaExport - Footage"
              promo="489k"
              normal="589k"
              coupon="GENMETAVID"
              buyLink="https://my.grafisify.com/product/metadata-export-for-microstock-footage-yearly/?_gl=1*l19cl5*_ga*MTA2OTc2MjUyNy4xNzE5NzIxNzky*_ga_K643DSJKVJ*MTc0MTMzMTgxOC4zMS4wLjE3NDEzMzE4MzIuMC4wLjA."
            />
          </div>
        </>
      )}

      {activeTab === 'bulanan' && (
        <>
          <h3 className="text-2xl font-bold text-center mb-8">Bulanan</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PricingCard
              title="MidGen Pro | 3 Month"
              promo="458k"
              normal="654k"
              bonus="MidBot 3 Month"
              coupon="GETMIDGEN30"
              buyLink="https://my.grafisify.com/product/midgen-pro-3-month/?_gl=1*gex78s*_ga*MTA2OTc2MjUyNy4xNzE5NzIxNzky*_ga_K643DSJKVJ*MTc0MTMzMTgxOC4zMS4wLjE3NDEzMzE4MzIuMC4wLjA."
            />
            <PricingCard
              title="MidGen Pro | 1 Month"
              promo="287k"
              normal="410k"
              coupon="GETMIDGEN30"
              buyLink="https://my.grafisify.com/product/midgen-pro-monthly/?_gl=1*gex78s*_ga*MTA2OTc2MjUyNy4xNzE5NzIxNzky*_ga_K643DSJKVJ*MTc0MTMzMTgxOC4zMS4wLjE3NDEzMzE4MzIuMC4wLjA."
            />
            <PricingCard
              title="MidGen Lite | 3 Month"
              promo="350k"
              normal="500k"
              coupon="GETMIDGEN30"
              buyLink="https://my.grafisify.com/product/midgen-lite-3-month/?_gl=1*gex78s*_ga*MTA2OTc2MjUyNy4xNzE5NzIxNzky*_ga_K643DSJKVJ*MTc0MTMzMTgxOC4zMS4wLjE3NDEzMzE4MzIuMC4wLjA."
            />
            <PricingCard
              title="MidGen Lite | 1 Month"
              promo="145k"
              normal="207k"
              coupon="GETMIDGEN30"
              buyLink="https://my.grafisify.com/product/midgen-monthly/?_gl=1*gex78s*_ga*MTA2OTc2MjUyNy4xNzE5NzIxNzky*_ga_K643DSJKVJ*MTc0MTMzMTgxOC4zMS4wLjE3NDEzMzE4MzIuMC4wLjA."
            />
            <PricingCard
              title="MetaExport | 6 Month"
              promo="198k"
              normal="360k"
              coupon="ISICEPAT"
              buyLink="https://my.grafisify.com/product/metaexport-ai-6-month/"
            />
            <PricingCard
              title="MetaExport | 3 Month"
              promo="99k"
              normal="180k"
              coupon="ISICEPAT"
              buyLink="https://my.grafisify.com/product/metaexport-ai-3-month/"
            />
            <PricingCard
              title="MetaExport | 1 Month"
              promo="45k"
              normal="81k"
              coupon="ISICEPAT"
              buyLink="https://my.grafisify.com/product/metadata-export-for-microstock/?_gl=1*qdnvw6*_ga*MTA2OTc2MjUyNy4xNzE5NzIxNzky*_ga_K643DSJKVJ*MTc0MTMzMTgxOC4zMS4wLjE3NDEzMzE4MzIuMC4wLjA."
            />
            <PricingCard
              title="MetaExport - Footage"
              promo="169k"
              normal="362k"
              coupon="GENMETAVID"
              buyLink="https://my.grafisify.com/product/metadata-export-for-microstock-footage-monthly/?_gl=1*qdnvw6*_ga*MTA2OTc2MjUyNy4xNzE5NzIxNzky*_ga_K643DSJKVJ*MTc0MTMzMTgxOC4zMS4wLjE3NDEzMzE4MzIuMC4wLjA."
            />
            <PricingCard
              title="Dreamstime Auto | 2 Month"
              promo="189k"
              normal="264k"
              coupon="DREAMSGO"
              buyLink="https://my.grafisify.com/product/dreamstime-auto-submit-2/?_gl=1*qdnvw6*_ga*MTA2OTc2MjUyNy4xNzE5NzIxNzky*_ga_K643DSJKVJ*MTc0MTMzMTgxOC4zMS4wLjE3NDEzMzE4MzIuMC4wLjA."
            />
            <PricingCard
              title="CanvaClean BG | 2 Month"
              promo="158k"
              normal="264k"
              coupon="BGCLEANER"
              buyLink="https://my.grafisify.com/product/canvaclean/?_gl=1*qdnvw6*_ga*MTA2OTc2MjUyNy4xNzE5NzIxNzky*_ga_K643DSJKVJ*MTc0MTMzMTgxOC4zMS4wLjE3NDEzMzE4MzIuMC4wLjA."
            />
          </div>
        </>
      )}

      {activeTab === 'trial' && (
        <>
          <h3 className="text-2xl font-bold text-center mb-8">Trial & Free</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <PricingCard
              title="MJPrompter"
              promo="FREE Trial"
              normal="-"
              buyLink="#"
            />
            <PricingCard
              title="AutoMeta123"
              promo="FREE Trial"
              normal="149k"
              buyLink="#"
            />
          </div>
        </>
      )}
    </section>
  );
}