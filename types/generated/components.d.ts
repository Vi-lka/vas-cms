import type { Schema, Attribute } from '@strapi/strapi';

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
      'items.orgs-item': ItemsOrgsItem;
    }
  }
}
