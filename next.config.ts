import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const isProd = process.env.NODE_ENV === 'production';

const withNextIntl = createNextIntlPlugin({
  experimental: isProd ? {} : {
    createMessagesDeclaration: ['./src/messages/es.json', './src/messages/en.json']
  }
});

const config: NextConfig = {};

export default withNextIntl(config);
