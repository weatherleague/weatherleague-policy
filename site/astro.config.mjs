import { defineConfig } from 'astro/config';

// GitHub Pages 프로젝트 사이트: https://weatherleague.github.io/weatherleague-policy/
// 자체 도메인을 붙이는 날 base를 '/'로 바꾸고 다시 빌드하면 된다.
export default defineConfig({
  site: 'https://weatherleague.github.io',
  base: '/weatherleague-policy',
});
