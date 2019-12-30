import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import ProductPagePreview from './preview-templates/ProductPagePreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';
import ProductPreview from './preview-templates/ProductPreview';
import ProductCategoryPreview from './preview-templates/ProductCategoryPreview';
import EmployeePreview from './preview-templates/EmployeePreview';
import ProjectPreview from './preview-templates/ProjectPreview';
import SolutionPreview from './preview-templates/SolutionPreview';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('products', ProductPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
CMS.registerPreviewTemplate('product', ProductPreview);
CMS.registerPreviewTemplate('productcategory', ProductCategoryPreview);
CMS.registerPreviewTemplate('employee', EmployeePreview);
CMS.registerPreviewTemplate('project', ProjectPreview);
CMS.registerPreviewTemplate('solution', SolutionPreview);
