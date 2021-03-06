/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */

/**
 * Field properties interface.
 */
export interface Properties {
  /**
   * Field classes.
   */
  class?: string;
  /**
   * Field slot.
   */
  slot?: string;
  /**
   * Field label.
   */
  label?: string;
  /**
   * Field name.
   */
  type?: string;
  /**
   * Field name.
   */
  name?: string;
  /**
   * Field value.
   */
  value?: any;
  /**
   * Determines whether the field is checked or not.
   */
  checked?: boolean;
  /**
   * Determines whether the field is required or not.
   */
  required?: boolean;
  /**
   * Determines whether the field is read-only or not.
   */
  readOnly?: boolean;
  /**
   * Determines whether the field is disabled or not.
   */
  disabled?: boolean;
  /**
   * Field tab index.
   */
  tabIndex?: number;
  /**
   * Field orientation.
   */
  orientation?: string;
  /**
   * Field data.
   */
  data?: DOMStringMap;
  /**
   * Field children.
   */
  children?: {};
  /**
   * Change event.
   */
  onChange?: (event: Event) => void;
}
