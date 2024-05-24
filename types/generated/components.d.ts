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

export interface ItemsCommitteeItem extends Schema.Component {
  collectionName: 'components_items_committee_items';
  info: {
    displayName: 'CommitteeItem';
    icon: 'shield';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    persons: Attribute.Component<'items.person-item', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
  };
}

export interface ItemsContactsItem extends Schema.Component {
  collectionName: 'components_items_contacts_items';
  info: {
    displayName: 'ContactsItem';
    icon: 'book';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    places: Attribute.Component<'items.contacts-place', true>;
    persons: Attribute.Component<'items.contacts-person', true>;
  };
}

export interface ItemsContactsPerson extends Schema.Component {
  collectionName: 'components_items_contacts_people';
  info: {
    displayName: 'ContactsPerson';
    icon: 'user';
  };
  attributes: {
    title: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    description: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    tel: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    email: Attribute.Email;
  };
}

export interface ItemsContactsPlace extends Schema.Component {
  collectionName: 'components_items_contacts_places';
  info: {
    displayName: 'ContactsPlace';
    icon: 'book';
  };
  attributes: {
    title: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    address: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    link: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
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

export interface ItemsPersonItem extends Schema.Component {
  collectionName: 'components_items_person_items';
  info: {
    displayName: 'PersonItem';
    icon: 'user';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    description: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    image: Attribute.Media;
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
      'items.committee-item': ItemsCommitteeItem;
      'items.contacts-item': ItemsContactsItem;
      'items.contacts-person': ItemsContactsPerson;
      'items.contacts-place': ItemsContactsPlace;
      'items.directions-item': ItemsDirectionsItem;
      'items.file': ItemsFile;
      'items.files-grid-item': ItemsFilesGridItem;
      'items.orgs-item': ItemsOrgsItem;
      'items.person-item': ItemsPersonItem;
      'items.programm-item': ItemsProgrammItem;
      'items.programm-time': ItemsProgrammTime;
    }
  }
}
