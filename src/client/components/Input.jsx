// @flow
import React from 'react';
import styled from 'styled-components';
import type { Children } from 'react';

type Props = {
	label: string,
	value: string | number,
	type: 'text' | 'select',
	option?: Children
};

export default function Input(props: Props) {
  return (
    <div className="container">
      <div className="group">
        <select>
          <option value="volvo" />
          <option value="saab">Saab</option>
          <option value="audi">Audi</option>
        </select>
        <span className="highlight" />
        <span className="bar" />
        <label>Name</label>
      </div>

      <div className="group">
        <input type="text" required />
        <span className="highlight" />
        <span className="bar" />
        <label>Email</label>
      </div>
    </div>
  );
}
