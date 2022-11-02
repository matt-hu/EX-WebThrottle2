
import { describe, it, test, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import HomeView from '../HomeView.vue';

import { createVuetify } from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"
describe('HelloWorld', () => {
    const vuetify = createVuetify({ components, directives })
    test('renders properly',async () => {
        // const wrapper = mount(HomeView, { props: { msg: 'Hello Vitest', msg2: 'Test' } });
        const wrapper = mount(HomeView, {
            global: {
                plugins: [vuetify]
            }
        });
        expect(wrapper.text()).toContain('Home');
        expect(wrapper.text()).toContain('0');

        await wrapper.get('button').trigger('click');
        expect(wrapper.text()).toContain('1');
    });
});
describe('import vue components', () => {
    test('normal imports as expected', async () => {
        const cmp = await import('../HomeView.vue');
        expect(cmp).toBeDefined();
    });
});