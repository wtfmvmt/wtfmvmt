const db = {
    images: {
        filter: {
            "and": [
                {
                    "property": "Type",
                    "contains": {
                        "equals": "Photo"
                    }
                },
                {
                    "or": [
                        {
                            "property": "Tags",
                            "contains": "A"
                        },
                        {
                            "property": "Tags",
                            "contains": "B"
                        }
                    ]
                }
            ]
        }
    },

    events: {
        filter: {
            "and": [
              {
                "property": "Type",
                "checkbox": {
                  "equals": true
                }
              }, 
              {
                "or": [
                  {
                    "property": "Tags",
                    "contains": "A"
                  },
                  {
                    "property": "Tags",
                    "contains": "B"
                  }
                ]
              }
            ]
          }
    }
}

export default db