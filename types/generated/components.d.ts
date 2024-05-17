import type { Schema, Attribute } from '@strapi/strapi';

export interface ContentFiles extends Schema.Component {
  collectionName: 'components_content_files';
  info: {
    displayName: 'Files';
    icon: 'bulletList';
    description: '';
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

export interface ContentImageSlider extends Schema.Component {
  collectionName: 'components_content_image_sliders';
  info: {
    displayName: 'ImageSlider';
    icon: 'landscape';
  };
  attributes: {
    title: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    images: Attribute.Media & Attribute.Required;
  };
}

export interface ContentTextBlock extends Schema.Component {
  collectionName: 'components_content_text_blocks';
  info: {
    displayName: 'TextBlock';
    icon: 'medium';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    text: Attribute.Blocks & Attribute.Required;
  };
}

export interface ItemsAdditionalPlaceInfo extends Schema.Component {
  collectionName: 'components_items_additional_place_infos';
  info: {
    displayName: 'AdditionalPlaceInfo';
    icon: 'information';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    image: Attribute.Media & Attribute.Required;
    description: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    page: Attribute.Relation<
      'items.additional-place-info',
      'oneToOne',
      'api::additional-page.additional-page'
    >;
  };
}

export interface ItemsDirectionsItem extends Schema.Component {
  collectionName: 'components_items_directions_items';
  info: {
    displayName: 'DirectionsItem';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
  };
}

export interface ItemsFile extends Schema.Component {
  collectionName: 'components_items_files';
  info: {
    displayName: 'File';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    file: Attribute.Media & Attribute.Required;
    description: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
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

export interface ItemsProgrammItem extends Schema.Component {
  collectionName: 'components_items_programm_items';
  info: {
    displayName: 'ProgrammItem';
    icon: 'filter';
    description: '';
  };
  attributes: {
    day: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    times: Attribute.Component<'items.programm-time', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
  };
}

export interface ItemsProgrammTime extends Schema.Component {
  collectionName: 'components_items_programm_times';
  info: {
    displayName: 'ProgrammTime';
    icon: 'clock';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    time: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'content.files': ContentFiles;
      'content.image-slider': ContentImageSlider;
      'content.text-block': ContentTextBlock;
      'items.additional-place-info': ItemsAdditionalPlaceInfo;
      'items.directions-item': ItemsDirectionsItem;
      'items.file': ItemsFile;
      'items.files-grid-item': ItemsFilesGridItem;
      'items.orgs-item': ItemsOrgsItem;
      'items.programm-item': ItemsProgrammItem;
      'items.programm-time': ItemsProgrammTime;
    }
  }
}
