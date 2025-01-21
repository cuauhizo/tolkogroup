import { generateClasses } from '@formkit/themes';
import { en, es } from '@formkit/i18n';
const formKitConfig = {
  config: {
    classes: generateClasses({
      global: {
        wrapper: 'space-y-2 mb-3',
        label: 'float-left block font-normal text-gray-400 text-lg',
        input: 'w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-tolko-red',
        message: 'text-tolko-red text-sm',
        help: 'text-sm text-end',
      },
      submit: {
        input:
          '$reset py-3 text-base font-medium rounded text-white bg-tolko-red w-full hover:opacity-85 transition duration-300',
      },
    }),
    generateId: (node) => {
      const formId = node.parent?.props.id || '';
      const fieldName = node.props.name || '';
      return `${formId}-${fieldName}`.toLowerCase();
    },
  },
  locales: {
    en,
    es,
  },
  locale: 'en',
  // locale: navigator.language.startsWith('es') ? 'es' : 'en',
};

export default formKitConfig;
