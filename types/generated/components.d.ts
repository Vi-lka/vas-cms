import type { Schema, Attribute } from '@strapi/strapi';

export interface ItemsFile extends Schema.Component {
  collectionName: 'components_items_files';
  info: {
    displayName: 'File';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    file: Attribute.Media & Attribute.Required;
  };
}

export interface ItemsFilesGridItem extends Schema.Component {
  collectionName: 'components_items_files_grid_items';
  info: {
    displayName: 'FilesGridItem';
    icon: 'grid';
  };
  attributes: {
    title: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    files: Attribute.Component<'items.file', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
  };
}

export interface ItemsOrgsItem extends Schema.Component {
  collectionName: 'components_items_orgs_items';
  info: {
    displayName: 'OrgsItem';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    image: Attribute.Media & Attribute.Required;
    url: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'items.file': ItemsFile;
      'items.files-grid-item': ItemsFilesGridItem;
      'items.orgs-item': ItemsOrgsItem;
    }
  }
}
