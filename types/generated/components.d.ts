import type { Schema, Attribute } from '@strapi/strapi';

export interface BtnButton extends Schema.Component {
  collectionName: 'components_btn_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    label: Attribute.String;
  };
}

export interface HeaderLinks extends Schema.Component {
  collectionName: 'components_header_links';
  info: {
    displayName: 'links';
  };
  attributes: {
    label: Attribute.String;
    link: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'btn.button': BtnButton;
      'header.links': HeaderLinks;
    }
  }
}
