
import { describe, it, test, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import HomeView from '../HomeView.vue';

// describe('HelloWorld', () => {
//     test('renders properly', () => {
//         // const wrapper = mount(HomeView, { props: { msg: 'Hello Vitest', msg2: 'Test' } });
//         const wrapper = mount(HomeView);
//         expect(wrapper.text()).toContain('Home');
//     });
// });
describe('import vue components', () => {
    test('normal imports as expected', async () => {
        const cmp = await import('../HomeView.vue');
        expect(cmp).toBeDefined();
    });
});