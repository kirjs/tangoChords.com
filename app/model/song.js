/**
 * Created with JetBrains PhpStorm.
 * Author: Kirill Cherkashin
 *
 */

"use strict";

Ext.define( 'chords.model.song', {
    extend: 'Ext.data.Model',

    config: {

        fields: [
            "id", "name", "genre", "performer", "words", "text", "source",

            {
                name:    'title',
                type:    'string',
                convert: function ( v, record ) {
                    return record.data.performer + " " + record.data.name;
                }
            }
        ]

    },

    getTitle: function () {
        return this.get( 'performer' ) + ' - ' + this.get( 'name' );
    }



} );
