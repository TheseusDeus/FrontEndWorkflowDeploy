﻿using Microsoft.Azure.Cosmos.Table;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GiEnJul.Entities
{
    public class Person : TableEntity
    {
        // RowKey = Guid
        // PartitionKey = {recipientId}
        public Person(string recipientId, string rowKey) : base(recipientId, rowKey)
        {
            PartitionKey = $"{recipientId}";
            RowKey = rowKey;
        }

        public string Wish { get; set; }
        public int Age { get; set; }
        // Following ISO/IEC 5218:2004 gender is stored as:
        // 0 = Not known;
        // 1 = Male;
        // 2 = Female;
        // 9 = Not applicable.
        public int Gender { get; set; }
    }
}