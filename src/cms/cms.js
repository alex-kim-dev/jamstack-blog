import CMS from 'netlify-cms-app';
import { MdxControl, setupPreview } from 'netlify-cms-widget-mdx';

import MdxBodyComponents from '../components/MdxBodyComponents';
import SmartLink from '../components/SmartLink';
import BlogPostPreview from './BlogPostPreview';

CMS.registerWidget(
  'mdx',
  MdxControl,
  setupPreview({
    components: MdxBodyComponents,
    scope: {
      Link: SmartLink,
    },
  }),
);

CMS.registerPreviewTemplate('blog', BlogPostPreview);
