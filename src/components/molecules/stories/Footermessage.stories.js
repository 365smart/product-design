import React from 'react';
import { Footermessage } from '../';
import { Icon } from '../../atoms';

export default { title: 'molecules.Footermessage' };

export const beforeScan = () => <Footermessage icons={<Icon name="barcode" />} footerMessage="Scan an item at any time" />;
export const afterScan = () => <Footermessage icons={<div><Icon name="barcode" /><Icon name="fingerprint" /><Icon name="card" /></div>} footerMessage="Scan an item at any time" />;
