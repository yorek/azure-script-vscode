var azcmdmap = {
    "feedback": {       
    }, 
    "ad": {
        "app": {
            "credential": {
                "reset": {
                    "$args": [
                        "id", 
                        "append", 
                        "cert", 
                        "create-cert", 
                        "keyvault", 
                        "password", 
                        "years"
                    ]
                }, 
                "list": {
                    "$args": [
                        "id", 
                        "cert"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "id", 
                        "key-id", 
                        "cert"
                    ]
                }
            }, 
            "permission": {
                "add": {
                    "$args": [
                        "api", 
                        "api-permissions", 
                        "id"
                    ]
                }, 
                "grant": {
                    "$args": [
                        "api", 
                        "id", 
                        "expires", 
                        "scope"
                    ]
                }, 
                "list": {
                    "$args": [
                        "id"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "api", 
                        "id"
                    ]
                }
            }, 
            "create": {
                "$args": [
                    "display-name", 
                    "available-to-other-tenants", 
                    "end-date", 
                    "homepage", 
                    "identifier-uris", 
                    "key-type", 
                    "key-usage", 
                    "key-value", 
                    "native-app", 
                    "oauth2-allow-implicit-flow", 
                    "password", 
                    "reply-urls", 
                    "required-resource-accesses", 
                    "start-date"
                ]
            }, 
            "show": {
                "$args": [
                    "id"
                ]
            }, 
            "list": {
                "$args": [
                    "app-id", 
                    "display-name", 
                    "filter", 
                    "identifier-uri"
                ]
            }, 
            "update": {
                "$args": [
                    "id", 
                    "available-to-other-tenants", 
                    "display-name", 
                    "end-date", 
                    "homepage", 
                    "identifier-uris", 
                    "key-type", 
                    "key-usage", 
                    "key-value", 
                    "oauth2-allow-implicit-flow", 
                    "password", 
                    "reply-urls", 
                    "required-resource-accesses", 
                    "start-date", 
                    "add", 
                    "force-string", 
                    "remove", 
                    "set"
                ]
            }, 
            "owner": {
                "add": {
                    "$args": [
                        "id", 
                        "owner-object-id"
                    ]
                }, 
                "list": {
                    "$args": [
                        "id"
                    ]
                }, 
                "remove": {
                    "$args": [
                        "id", 
                        "owner-object-id"
                    ]
                }
            }, 
            "delete": {
                "$args": [
                    "id"
                ]
            }
        }, 
        "sp": {
            "credential": {
                "reset": {
                    "$args": [
                        "name", 
                        "append", 
                        "cert", 
                        "create-cert", 
                        "keyvault", 
                        "password", 
                        "years"
                    ]
                }, 
                "list": {
                    "$args": [
                        "id", 
                        "cert"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "id", 
                        "key-id", 
                        "cert"
                    ]
                }
            }, 
            "create-for-rbac": {
                "$args": [
                    "name", 
                    "role", 
                    "scopes", 
                    "sdk-auth", 
                    "skip-assignment", 
                    "cert", 
                    "create-cert", 
                    "keyvault", 
                    "password", 
                    "years"
                ]
            }, 
            "show": {
                "$args": [
                    "id"
                ]
            }, 
            "create": {
                "$args": [
                    "id"
                ]
            }, 
            "list": {
                "$args": [
                    "display-name", 
                    "filter", 
                    "spn"
                ]
            }, 
            "owner": {
                "list": {
                    "$args": [
                        "id"
                    ]
                }
            }, 
            "delete": {
                "$args": [
                    "id"
                ]
            }
        }, 
        "group": {
            "get-member-groups": {
                "$args": [
                    "group", 
                    "additional-properties", 
                    "security-enabled-only"
                ]
            }, 
            "show": {
                "$args": [
                    "group"
                ]
            }, 
            "create": {
                "$args": [
                    "display-name", 
                    "mail-nickname"
                ]
            }, 
            "list": {
                "$args": [
                    "display-name", 
                    "filter"
                ]
            }, 
            "member": {
                "add": {
                    "$args": [
                        "group", 
                        "member-id", 
                        "additional-properties"
                    ]
                }, 
                "list": {
                    "$args": [
                        "group"
                    ]
                }, 
                "check": {
                    "$args": [
                        "group", 
                        "member-id"
                    ]
                }, 
                "remove": {
                    "$args": [
                        "group", 
                        "member-id"
                    ]
                }
            }, 
            "owner": {
                "add": {
                    "$args": [
                        "group", 
                        "owner-object-id"
                    ]
                }, 
                "list": {
                    "$args": [
                        "group"
                    ]
                }, 
                "remove": {
                    "$args": [
                        "group", 
                        "owner-object-id"
                    ]
                }
            }, 
            "delete": {
                "$args": [
                    "group"
                ]
            }
        }, 
        "user": {
            "create": {
                "$args": [
                    "display-name", 
                    "user-principal-name", 
                    "force-change-password-next-login", 
                    "immutable-id", 
                    "mail-nickname"
                ]
            }, 
            "show": {
                "$args": [
                    "upn-or-object-id"
                ]
            }, 
            "list": {
                "$args": [
                    "display-name", 
                    "filter", 
                    "upn"
                ]
            }, 
            "get-member-groups": {
                "$args": [
                    "upn-or-object-id", 
                    "security-enabled-only"
                ]
            }, 
            "delete": {
                "$args": [
                    "upn-or-object-id"
                ]
            }
        }, 
        "signed-in-user": {
            "list-owned-objects": {
                "$args": [
                    "type"
                ]
            }, 
            "show": {                
            }
        }
    }, 
    "lock": {
        "create": {
            "$args": [
                "lock-type", 
                "name", 
                "namespace", 
                "notes", 
                "parent", 
                "resource", 
                "resource-group", 
                "resource-type"
            ]
        }, 
        "show": {
            "$args": [
                "ids", 
                "name", 
                "namespace", 
                "parent", 
                "resource", 
                "resource-group", 
                "resource-type"
            ]
        }, 
        "list": {
            "$args": [
                "filter-string", 
                "namespace", 
                "parent", 
                "resource", 
                "resource-group", 
                "resource-type"
            ]
        }, 
        "update": {
            "$args": [
                "ids", 
                "lock-type", 
                "name", 
                "namespace", 
                "notes", 
                "parent", 
                "resource", 
                "resource-group", 
                "resource-type"
            ]
        }, 
        "delete": {
            "$args": [
                "ids", 
                "name", 
                "namespace", 
                "parent", 
                "resource", 
                "resource-group", 
                "resource-type"
            ]
        }
    }, 
    "cdn": {
        "origin": {
            "list": {
                "$args": [
                    "endpoint-name", 
                    "profile-name", 
                    "resource-group"
                ]
            }, 
            "show": {
                "$args": [
                    "endpoint-name", 
                    "profile-name", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "profile": {
            "show": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "create": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "location", 
                    "sku", 
                    "tags"
                ]
            }, 
            "list": {
                "$args": [
                    "resource-group"
                ]
            }, 
            "update": {
                "$args": [
                    "tags", 
                    "add", 
                    "force-string", 
                    "remove", 
                    "set", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "usage": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "delete": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "endpoint": {
            "load": {
                "$args": [
                    "content-paths", 
                    "profile-name", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "show": {
                "$args": [
                    "profile-name", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "stop": {
                "$args": [
                    "profile-name", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "create": {
                "$args": [
                    "name", 
                    "origin", 
                    "profile-name", 
                    "resource-group", 
                    "content-types-to-compress", 
                    "enable-compression", 
                    "location", 
                    "no-http", 
                    "no-https", 
                    "origin-host-header", 
                    "origin-path", 
                    "query-string-caching", 
                    "tags"
                ]
            }, 
            "list": {
                "$args": [
                    "profile-name", 
                    "resource-group"
                ]
            }, 
            "update": {
                "$args": [
                    "profile-name", 
                    "content-types-to-compress", 
                    "enable-compression", 
                    "no-http", 
                    "no-https", 
                    "origin-host-header", 
                    "origin-path", 
                    "query-string-caching", 
                    "tags", 
                    "add", 
                    "force-string", 
                    "remove", 
                    "set", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "purge": {
                "$args": [
                    "content-paths", 
                    "profile-name", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "start": {
                "$args": [
                    "profile-name", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "validate-custom-domain": {
                "$args": [
                    "host-name", 
                    "profile-name", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "delete": {
                "$args": [
                    "profile-name", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "edge-node": {
            "list": {                
            }
        }, 
        "name-exists": {
            "$args": [
                "ids", 
                "name", 
                "subscription"
            ]
        }, 
        "custom-domain": {
            "show": {
                "$args": [
                    "endpoint-name", 
                    "name", 
                    "profile-name", 
                    "resource-group"
                ]
            }, 
            "create": {
                "$args": [
                    "endpoint-name", 
                    "hostname", 
                    "name", 
                    "profile-name", 
                    "resource-group", 
                    "location", 
                    "tags"
                ]
            }, 
            "list": {
                "$args": [
                    "endpoint-name", 
                    "profile-name", 
                    "resource-group"
                ]
            }, 
            "enable-https": {
                "$args": [
                    "endpoint-name", 
                    "name", 
                    "profile-name", 
                    "resource-group"
                ]
            }, 
            "disable-https": {
                "$args": [
                    "endpoint-name", 
                    "name", 
                    "profile-name", 
                    "resource-group"
                ]
            }, 
            "delete": {
                "$args": [
                    "endpoint-name", 
                    "name", 
                    "profile-name", 
                    "resource-group"
                ]
            }
        }, 
        "usage": {
            
        }
    }, 
    "advisor": {
        "configuration": {
            "list": {
                
            }, 
            "update": {
                "$args": [
                    "exclude", 
                    "include", 
                    "low-cpu-threshold", 
                    "resource-group", 
                    "add", 
                    "force-string", 
                    "remove", 
                    "set"
                ]
            }, 
            "show": {
                "$args": [
                    "resource-group"
                ]
            }
        }, 
        "recommendation": {
            "enable": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group"
                ]
            }, 
            "disable": {
                "$args": [
                    "days", 
                    "ids", 
                    "name", 
                    "resource-group"
                ]
            }, 
            "list": {
                "$args": [
                    "category", 
                    "ids", 
                    "refresh", 
                    "resource-group"
                ]
            }
        }
    }, 
    "vm": {
        "stop": {
            "$args": [
                "no-wait", 
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "show": {
            "$args": [
                "show-details", 
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "image": {
            "list-offers": {
                "$args": [
                    "location", 
                    "publisher"
                ]
            }, 
            "show": {
                "$args": [
                    "location", 
                    "offer", 
                    "publisher", 
                    "sku", 
                    "urn", 
                    "version"
                ]
            }, 
            "list": {
                "$args": [
                    "all", 
                    "location", 
                    "offer", 
                    "publisher", 
                    "sku"
                ]
            }, 
            "list-publishers": {
                "$args": [
                    "location"
                ]
            }, 
            "list-skus": {
                "$args": [
                    "location", 
                    "offer", 
                    "publisher"
                ]
            }, 
            "accept-terms": {
                "$args": [
                    "offer", 
                    "plan", 
                    "publisher", 
                    "urn"
                ]
            }
        }, 
        "perform-maintenance": {
            "$args": [
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "list-vm-resize-options": {
            "$args": [
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "open-port": {
            "$args": [
                "port", 
                "apply-to-subnet", 
                "nsg-name", 
                "priority", 
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "generalize": {
            "$args": [
                "no-wait", 
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "disk": {
            "attach": {
                "$args": [
                    "disk", 
                    "resource-group", 
                    "vm-name", 
                    "caching", 
                    "enable-write-accelerator", 
                    "lun", 
                    "new", 
                    "size-gb", 
                    "sku"
                ]
            }, 
            "detach": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "vm-name"
                ]
            }
        }, 
        "list-ip-addresses": {
            "$args": [
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "capture": {
            "$args": [
                "vhd-name-prefix", 
                "overwrite", 
                "storage-container", 
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "encryption": {
            "enable": {
                "$args": [
                    "disk-encryption-keyvault", 
                    "aad-client-cert-thumbprint", 
                    "aad-client-id", 
                    "aad-client-secret", 
                    "encrypt-format-all", 
                    "key-encryption-algorithm", 
                    "key-encryption-key", 
                    "key-encryption-keyvault", 
                    "volume-type", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "disable": {
                "$args": [
                    "force", 
                    "volume-type", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "show": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "create": {
            "$args": [
                "name", 
                "resource-group", 
                "attach-data-disks", 
                "attach-os-disk", 
                "availability-set", 
                "boot-diagnostics-storage", 
                "custom-data", 
                "image", 
                "license-type", 
                "location", 
                "no-wait", 
                "secrets", 
                "size", 
                "tags", 
                "validate", 
                "zone", 
                "admin-password", 
                "admin-username", 
                "authentication-type", 
                "generate-ssh-keys", 
                "ssh-dest-key-path", 
                "ssh-key-value", 
                "assign-identity", 
                "role", 
                "scope", 
                "plan-name", 
                "plan-product", 
                "plan-promotion-code", 
                "plan-publisher", 
                "accelerated-networking", 
                "asgs", 
                "nics", 
                "nsg", 
                "nsg-rule", 
                "private-ip-address", 
                "public-ip-address", 
                "public-ip-address-allocation", 
                "public-ip-address-dns-name", 
                "public-ip-sku", 
                "subnet", 
                "subnet-address-prefix", 
                "vnet-address-prefix", 
                "vnet-name", 
                "data-disk-caching", 
                "data-disk-sizes-gb", 
                "ephemeral-os-disk", 
                "os-disk-caching", 
                "os-disk-name", 
                "os-disk-size-gb", 
                "os-type", 
                "storage-account", 
                "storage-container-name", 
                "storage-sku", 
                "ultra-ssd-enabled", 
                "use-unmanaged-disk"
            ]
        }, 
        "restart": {
            "$args": [
                "no-wait", 
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "start": {
            "$args": [
                "no-wait", 
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "secret": {
            "add": {
                "$args": [
                    "certificate", 
                    "keyvault", 
                    "certificate-store", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "list": {
                "$args": [
                    "name", 
                    "resource-group"
                ]
            }, 
            "remove": {
                "$args": [
                    "keyvault", 
                    "certificate", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "format": {
                "$args": [
                    "secrets", 
                    "certificate-store", 
                    "keyvault", 
                    "resource-group"
                ]
            }
        }, 
        "resize": {
            "$args": [
                "size", 
                "no-wait", 
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "deallocate": {
            "$args": [
                "no-wait", 
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "availability-set": {
            "convert": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "show": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "create": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "location", 
                    "no-wait", 
                    "platform-fault-domain-count", 
                    "platform-update-domain-count", 
                    "tags", 
                    "unmanaged", 
                    "validate"
                ]
            }, 
            "list": {
                "$args": [
                    "resource-group"
                ]
            }, 
            "update": {
                "$args": [
                    "add", 
                    "force-string", 
                    "remove", 
                    "set", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "list-sizes": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "delete": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "boot-diagnostics": {
            "get-boot-log": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "enable": {
                "$args": [
                    "storage", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "disable": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "nic": {
            "add": {
                "$args": [
                    "nics", 
                    "resource-group", 
                    "vm-name", 
                    "primary-nic"
                ]
            }, 
            "set": {
                "$args": [
                    "nics", 
                    "resource-group", 
                    "vm-name", 
                    "primary-nic"
                ]
            }, 
            "list": {
                "$args": [
                    "resource-group", 
                    "vm-name"
                ]
            }, 
            "remove": {
                "$args": [
                    "nics", 
                    "resource-group", 
                    "vm-name", 
                    "primary-nic"
                ]
            }, 
            "show": {
                "$args": [
                    "nic", 
                    "resource-group", 
                    "vm-name"
                ]
            }
        }, 
        "diagnostics": {
            "get-default-config": {
                "$args": [
                    "is-windows-os"
                ]
            }, 
            "set": {
                "$args": [
                    "settings", 
                    "no-auto-upgrade", 
                    "protected-settings", 
                    "version", 
                    "ids", 
                    "resource-group", 
                    "subscription", 
                    "vm-name"
                ]
            }
        }, 
        "unmanaged-disk": {
            "attach": {
                "$args": [
                    "resource-group", 
                    "vm-name", 
                    "caching", 
                    "lun", 
                    "name", 
                    "new", 
                    "size-gb", 
                    "vhd-uri"
                ]
            }, 
            "detach": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "vm-name"
                ]
            }, 
            "list": {
                "$args": [
                    "name", 
                    "resource-group"
                ]
            }
        }, 
        "update": {
            "$args": [
                "disk-caching", 
                "license-type", 
                "no-wait", 
                "os-disk", 
                "write-accelerator", 
                "add", 
                "force-string", 
                "remove", 
                "set", 
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "redeploy": {
            "$args": [
                "no-wait", 
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "list-usage": {
            "$args": [
                "location"
            ]
        }, 
        "user": {
            "update": {
                "$args": [
                    "username", 
                    "no-wait", 
                    "password", 
                    "ssh-key-value", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "reset-ssh": {
                "$args": [
                    "no-wait", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "delete": {
                "$args": [
                    "username", 
                    "no-wait", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "identity": {
            "assign": {
                "$args": [
                    "identities", 
                    "role", 
                    "scope", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "remove": {
                "$args": [
                    "identities", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "show": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "wait": {
            "$args": [
                "ids", 
                "name", 
                "resource-group", 
                "subscription", 
                "created", 
                "custom", 
                "deleted", 
                "exists", 
                "interval", 
                "timeout", 
                "updated"
            ]
        }, 
        "convert": {
            "$args": [
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "extension": {
            "set": {
                "$args": [
                    "publisher", 
                    "force-update", 
                    "no-auto-upgrade", 
                    "no-wait", 
                    "protected-settings", 
                    "settings", 
                    "version", 
                    "extension-instance-name", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription", 
                    "vm-name"
                ]
            }, 
            "show": {
                "$args": [
                    "expand", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription", 
                    "vm-name"
                ]
            }, 
            "image": {
                "show": {
                    "$args": [
                        "location", 
                        "name", 
                        "publisher", 
                        "version"
                    ]
                }, 
                "list": {
                    "$args": [
                        "latest", 
                        "location", 
                        "name", 
                        "publisher", 
                        "version"
                    ]
                }, 
                "list-names": {
                    "$args": [
                        "location", 
                        "publisher"
                    ]
                }, 
                "list-versions": {
                    "$args": [
                        "location", 
                        "name", 
                        "publisher", 
                        "filter", 
                        "orderby", 
                        "top"
                    ]
                }
            }, 
            "list": {
                "$args": [
                    "resource-group", 
                    "vm-name"
                ]
            }, 
            "delete": {
                "$args": [
                    "no-wait", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription", 
                    "vm-name"
                ]
            }, 
            "wait": {
                "$args": [
                    "expand", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription", 
                    "vm-name", 
                    "created", 
                    "custom", 
                    "deleted", 
                    "exists", 
                    "interval", 
                    "timeout", 
                    "updated"
                ]
            }
        }, 
        "list": {
            "$args": [
                "resource-group", 
                "show-details"
            ]
        }, 
        "list-sizes": {
            "$args": [
                "location"
            ]
        }, 
        "run-command": {
            "list": {
                "$args": [
                    "location"
                ]
            }, 
            "invoke": {
                "$args": [
                    "command-id", 
                    "parameters", 
                    "scripts", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "show": {
                "$args": [
                    "command-id", 
                    "location"
                ]
            }
        }, 
        "list-skus": {
            "$args": [
                "all", 
                "location", 
                "resource-type", 
                "size", 
                "zone"
            ]
        }, 
        "get-instance-view": {
            "$args": [
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "delete": {
            "$args": [
                "no-wait", 
                "yes", 
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }
    }, 
    "eventhubs": {
        "georecovery-alias": {
            "set": {
                "$args": [
                    "partner-namespace", 
                    "alternate-name", 
                    "alias", 
                    "ids", 
                    "namespace-name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "authorization-rule": {
                "keys": {
                    "list": {
                        "$args": [
                            "alias", 
                            "name", 
                            "namespace-name", 
                            "resource-group"
                        ]
                    }
                }, 
                "list": {
                    "$args": [
                        "alias", 
                        "namespace-name", 
                        "resource-group"
                    ]
                }, 
                "show": {
                    "$args": [
                        "alias", 
                        "ids", 
                        "name", 
                        "namespace-name", 
                        "resource-group", 
                        "subscription"
                    ]
                }
            }, 
            "exists": {
                "$args": [
                    "alias", 
                    "namespace-name", 
                    "resource-group"
                ]
            }, 
            "show": {
                "$args": [
                    "alias", 
                    "ids", 
                    "namespace-name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "break-pair": {
                "$args": [
                    "alias", 
                    "ids", 
                    "namespace-name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "list": {
                "$args": [
                    "namespace-name", 
                    "resource-group"
                ]
            }, 
            "fail-over": {
                "$args": [
                    "alias", 
                    "ids", 
                    "namespace-name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "delete": {
                "$args": [
                    "alias", 
                    "ids", 
                    "namespace-name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "namespace": {
            "authorization-rule": {
                "show": {
                    "$args": [
                        "ids", 
                        "name", 
                        "namespace-name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "keys": {
                    "renew": {
                        "$args": [
                            "key", 
                            "key-value", 
                            "ids", 
                            "name", 
                            "namespace-name", 
                            "resource-group", 
                            "subscription"
                        ]
                    }, 
                    "list": {
                        "$args": [
                            "name", 
                            "namespace-name", 
                            "resource-group"
                        ]
                    }
                }, 
                "create": {
                    "$args": [
                        "name", 
                        "namespace-name", 
                        "resource-group", 
                        "rights"
                    ]
                }, 
                "list": {
                    "$args": [
                        "namespace-name", 
                        "resource-group"
                    ]
                }, 
                "update": {
                    "$args": [
                        "rights", 
                        "add", 
                        "force-string", 
                        "remove", 
                        "set", 
                        "ids", 
                        "name", 
                        "namespace-name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "ids", 
                        "name", 
                        "namespace-name", 
                        "resource-group", 
                        "subscription"
                    ]
                }
            }, 
            "exists": {
                "$args": [
                    "name"
                ]
            }, 
            "show": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "create": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "capacity", 
                    "enable-auto-inflate", 
                    "enable-kafka", 
                    "location", 
                    "maximum-throughput-units", 
                    "sku", 
                    "tags"
                ]
            }, 
            "list": {
                "$args": [
                    "resource-group"
                ]
            }, 
            "update": {
                "$args": [
                    "capacity", 
                    "enable-auto-inflate", 
                    "enable-kafka", 
                    "maximum-throughput-units", 
                    "sku", 
                    "tags", 
                    "add", 
                    "force-string", 
                    "remove", 
                    "set", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "delete": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "eventhub": {
            "authorization-rule": {
                "show": {
                    "$args": [
                        "eventhub-name", 
                        "ids", 
                        "name", 
                        "namespace-name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "keys": {
                    "renew": {
                        "$args": [
                            "key", 
                            "key-value", 
                            "eventhub-name", 
                            "ids", 
                            "name", 
                            "namespace-name", 
                            "resource-group", 
                            "subscription"
                        ]
                    }, 
                    "list": {
                        "$args": [
                            "eventhub-name", 
                            "name", 
                            "namespace-name", 
                            "resource-group"
                        ]
                    }
                }, 
                "create": {
                    "$args": [
                        "eventhub-name", 
                        "name", 
                        "namespace-name", 
                        "resource-group", 
                        "rights"
                    ]
                }, 
                "list": {
                    "$args": [
                        "eventhub-name", 
                        "namespace-name", 
                        "resource-group"
                    ]
                }, 
                "update": {
                    "$args": [
                        "rights", 
                        "add", 
                        "force-string", 
                        "remove", 
                        "set", 
                        "eventhub-name", 
                        "ids", 
                        "name", 
                        "namespace-name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "eventhub-name", 
                        "ids", 
                        "name", 
                        "namespace-name", 
                        "resource-group", 
                        "subscription"
                    ]
                }
            }, 
            "show": {
                "$args": [
                    "ids", 
                    "name", 
                    "namespace-name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "create": {
                "$args": [
                    "name", 
                    "namespace-name", 
                    "resource-group", 
                    "enable-capture", 
                    "message-retention", 
                    "partition-count", 
                    "status", 
                    "capture-interval", 
                    "capture-size-limit", 
                    "archive-name-format", 
                    "blob-container", 
                    "destination-name", 
                    "storage-account"
                ]
            }, 
            "list": {
                "$args": [
                    "namespace-name", 
                    "resource-group", 
                    "skip", 
                    "top"
                ]
            }, 
            "update": {
                "$args": [
                    "enable-capture", 
                    "message-retention", 
                    "partition-count", 
                    "status", 
                    "capture-interval", 
                    "capture-size-limit", 
                    "archive-name-format", 
                    "blob-container", 
                    "destination-name", 
                    "storage-account", 
                    "add", 
                    "force-string", 
                    "remove", 
                    "set", 
                    "ids", 
                    "name", 
                    "namespace-name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "consumer-group": {
                "create": {
                    "$args": [
                        "eventhub-name", 
                        "name", 
                        "namespace-name", 
                        "resource-group", 
                        "user-metadata"
                    ]
                }, 
                "show": {
                    "$args": [
                        "eventhub-name", 
                        "ids", 
                        "name", 
                        "namespace-name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "list": {
                    "$args": [
                        "eventhub-name", 
                        "namespace-name", 
                        "resource-group", 
                        "skip", 
                        "top"
                    ]
                }, 
                "update": {
                    "$args": [
                        "user-metadata", 
                        "add", 
                        "force-string", 
                        "remove", 
                        "set", 
                        "eventhub-name", 
                        "ids", 
                        "name", 
                        "namespace-name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "eventhub-name", 
                        "ids", 
                        "name", 
                        "namespace-name", 
                        "resource-group", 
                        "subscription"
                    ]
                }
            }, 
            "delete": {
                "$args": [
                    "ids", 
                    "name", 
                    "namespace-name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }
    }, 
    "reservations": {
        "reservation-order": {
            "list": {
                
            }, 
            "show": {
                "$args": [
                    "reservation-order-id"
                ]
            }
        }, 
        "reservation": {
            "show": {
                "$args": [
                    "reservation-id", 
                    "reservation-order-id"
                ]
            }, 
            "list-history": {
                "$args": [
                    "reservation-id", 
                    "reservation-order-id"
                ]
            }, 
            "list": {
                "$args": [
                    "reservation-order-id"
                ]
            }, 
            "update": {
                "$args": [
                    "applied-scope-type", 
                    "reservation-id", 
                    "reservation-order-id", 
                    "applied-scopes", 
                    "instance-flexibility"
                ]
            }, 
            "merge": {
                "$args": [
                    "reservation-id-1", 
                    "reservation-id-2", 
                    "reservation-order-id"
                ]
            }, 
            "split": {
                "$args": [
                    "quantity-1", 
                    "quantity-2", 
                    "reservation-id", 
                    "reservation-order-id"
                ]
            }
        }, 
        "catalog": {
            "show": {
                "$args": [
                    "reserved-resource-type", 
                    "subscription-id", 
                    "location"
                ]
            }
        }, 
        "reservation-order-id": {
            "list": {
                "$args": [
                    "subscription-id"
                ]
            }
        }
    }, 
    "iotcentral": {
        "app": {
            "create": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "subdomain", 
                    "display-name", 
                    "location", 
                    "sku", 
                    "template"
                ]
            }, 
            "show": {
                "$args": [
                    "name", 
                    "resource-group"
                ]
            }, 
            "list": {
                "$args": [
                    "resource-group"
                ]
            }, 
            "update": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "add", 
                    "force-string", 
                    "remove", 
                    "set"
                ]
            }, 
            "delete": {
                "$args": [
                    "name", 
                    "resource-group"
                ]
            }
        }
    }, 
    "tag": {
        "add-value": {
            "$args": [
                "name", 
                "value"
            ]
        }, 
        "remove-value": {
            "$args": [
                "name", 
                "value"
            ]
        }, 
        "create": {
            "$args": [
                "name"
            ]
        }, 
        "list": {
            
        }, 
        "delete": {
            "$args": [
                "name"
            ]
        }
    }, 
    "search": {
        "service": {
            "create": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "sku", 
                    "location", 
                    "partition-count", 
                    "replica-count"
                ]
            }, 
            "show": {
                "$args": [
                    "name", 
                    "resource-group"
                ]
            }, 
            "list": {
                "$args": [
                    "resource-group"
                ]
            }, 
            "update": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "partition-count", 
                    "replica-count", 
                    "add", 
                    "force-string", 
                    "remove", 
                    "set"
                ]
            }, 
            "delete": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "yes"
                ]
            }
        }, 
        "admin-key": {
            "renew": {
                "$args": [
                    "key-kind", 
                    "resource-group", 
                    "service-name"
                ]
            }, 
            "show": {
                "$args": [
                    "resource-group", 
                    "service-name"
                ]
            }
        }, 
        "query-key": {
            "create": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "service-name"
                ]
            }, 
            "list": {
                "$args": [
                    "resource-group", 
                    "service-name"
                ]
            }, 
            "delete": {
                "$args": [
                    "key-value", 
                    "resource-group", 
                    "service-name"
                ]
            }
        }
    }, 
    "mysql": {
        "server-logs": {
            "download": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "server-name"
                ]
            }, 
            "list": {
                "$args": [
                    "resource-group", 
                    "server-name", 
                    "file-last-written", 
                    "filename-contains", 
                    "max-file-size"
                ]
            }
        }, 
        "db": {
            "create": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "server-name", 
                    "charset", 
                    "collation"
                ]
            }, 
            "show": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "server-name"
                ]
            }, 
            "list": {
                "$args": [
                    "resource-group", 
                    "server-name"
                ]
            }, 
            "delete": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "server-name", 
                    "yes"
                ]
            }
        }, 
        "server": {
            "restore": {
                "$args": [
                    "restore-point-in-time", 
                    "source-server", 
                    "no-wait", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "show": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "georestore": {
                "$args": [
                    "location", 
                    "source-server", 
                    "backup-retention", 
                    "geo-redundant-backup", 
                    "no-wait", 
                    "sku-name", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "create": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "sku-name", 
                    "backup-retention", 
                    "geo-redundant-backup", 
                    "location", 
                    "ssl-enforcement", 
                    "storage-size", 
                    "tags", 
                    "version", 
                    "admin-password"
                ]
            }, 
            "vnet-rule": {
                "create": {
                    "$args": [
                        "name", 
                        "resource-group", 
                        "server-name", 
                        "subnet", 
                        "ignore-missing-endpoint", 
                        "vnet-name"
                    ]
                }, 
                "show": {
                    "$args": [
                        "ids", 
                        "name", 
                        "resource-group", 
                        "server-name", 
                        "subscription"
                    ]
                }, 
                "list": {
                    "$args": [
                        "ids", 
                        "resource-group", 
                        "server-name", 
                        "subscription"
                    ]
                }, 
                "update": {
                    "$args": [
                        "subnet", 
                        "ignore-missing-endpoint", 
                        "vnet-name", 
                        "add", 
                        "force-string", 
                        "remove", 
                        "set", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "server-name", 
                        "subscription"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "ids", 
                        "name", 
                        "resource-group", 
                        "server-name", 
                        "subscription"
                    ]
                }
            }, 
            "list": {
                "$args": [
                    "resource-group"
                ]
            }, 
            "update": {
                "$args": [
                    "admin-password", 
                    "backup-retention", 
                    "sku-name", 
                    "ssl-enforcement", 
                    "storage-size", 
                    "tags", 
                    "add", 
                    "force-string", 
                    "remove", 
                    "set", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "wait": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription", 
                    "custom", 
                    "exists", 
                    "interval", 
                    "timeout"
                ]
            }, 
            "replica": {
                "stop": {
                    "$args": [
                        "yes", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "create": {
                    "$args": [
                        "name", 
                        "resource-group", 
                        "source-server", 
                        "no-wait"
                    ]
                }, 
                "list": {
                    "$args": [
                        "ids", 
                        "resource-group", 
                        "server-name", 
                        "subscription"
                    ]
                }
            }, 
            "configuration": {
                "set": {
                    "$args": [
                        "value", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "server-name", 
                        "subscription"
                    ]
                }, 
                "list": {
                    "$args": [
                        "ids", 
                        "resource-group", 
                        "server-name", 
                        "subscription"
                    ]
                }, 
                "show": {
                    "$args": [
                        "ids", 
                        "name", 
                        "resource-group", 
                        "server-name", 
                        "subscription"
                    ]
                }
            }, 
            "firewall-rule": {
                "create": {
                    "$args": [
                        "end-ip-address", 
                        "name", 
                        "resource-group", 
                        "server-name", 
                        "start-ip-address"
                    ]
                }, 
                "show": {
                    "$args": [
                        "ids", 
                        "name", 
                        "resource-group", 
                        "server-name", 
                        "subscription"
                    ]
                }, 
                "list": {
                    "$args": [
                        "ids", 
                        "resource-group", 
                        "server-name", 
                        "subscription"
                    ]
                }, 
                "update": {
                    "$args": [
                        "end-ip-address", 
                        "start-ip-address", 
                        "add", 
                        "force-string", 
                        "remove", 
                        "set", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "server-name", 
                        "subscription"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "yes", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "server-name", 
                        "subscription"
                    ]
                }
            }, 
            "delete": {
                "$args": [
                    "yes", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }
    }, 
    "disk": {
        "show": {
            "$args": [
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "create": {
            "$args": [
                "name", 
                "resource-group", 
                "disk-iops-read-write", 
                "disk-mbps-read-write", 
                "location", 
                "no-wait", 
                "size-gb", 
                "sku", 
                "source", 
                "source-storage-account-id", 
                "tags", 
                "zone"
            ]
        }, 
        "list": {
            "$args": [
                "resource-group"
            ]
        }, 
        "update": {
            "$args": [
                "disk-iops-read-write", 
                "disk-mbps-read-write", 
                "no-wait", 
                "size-gb", 
                "sku", 
                "add", 
                "force-string", 
                "remove", 
                "set", 
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "revoke-access": {
            "$args": [
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "grant-access": {
            "$args": [
                "duration-in-seconds", 
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "wait": {
            "$args": [
                "ids", 
                "name", 
                "resource-group", 
                "subscription", 
                "created", 
                "custom", 
                "deleted", 
                "exists", 
                "interval", 
                "timeout", 
                "updated"
            ]
        }, 
        "delete": {
            "$args": [
                "no-wait", 
                "yes", 
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }
    }, 
    "ams": {
        "account": {
            "show": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "mru": {
                "set": {
                    "$args": [
                        "count", 
                        "type", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "show": {
                    "$args": [
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }
            }, 
            "create": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "storage-account", 
                    "location", 
                    "tags"
                ]
            }, 
            "sp": {
                "reset-credentials": {
                    "$args": [
                        "password", 
                        "role", 
                        "xml", 
                        "years", 
                        "account-name", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "create": {
                    "$args": [
                        "account-name", 
                        "resource-group", 
                        "name", 
                        "password", 
                        "role", 
                        "xml", 
                        "years"
                    ]
                }
            }, 
            "storage": {
                "add": {
                    "$args": [
                        "account-name", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "remove": {
                    "$args": [
                        "account-name", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "sync-storage-keys": {
                    "$args": [
                        "id", 
                        "account-name", 
                        "ids", 
                        "resource-group", 
                        "subscription"
                    ]
                }
            }, 
            "update": {
                "$args": [
                    "tags", 
                    "add", 
                    "force-string", 
                    "remove", 
                    "set", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "check-name": {
                "$args": [
                    "location", 
                    "name"
                ]
            }, 
            "list": {
                "$args": [
                    "resource-group"
                ]
            }, 
            "delete": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "streaming-endpoint": {
            "scale": {
                "$args": [
                    "scale-units", 
                    "account-name", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "show": {
                "$args": [
                    "account-name", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "stop": {
                "$args": [
                    "no-wait", 
                    "account-name", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "create": {
                "$args": [
                    "account-name", 
                    "name", 
                    "resource-group", 
                    "scale-units", 
                    "auto-start", 
                    "availability-set-name", 
                    "custom-host-names", 
                    "description", 
                    "max-cache-age", 
                    "no-wait", 
                    "tags", 
                    "ips", 
                    "cdn-profile", 
                    "cdn-provider", 
                    "client-access-policy", 
                    "cross-domain-policy"
                ]
            }, 
            "list": {
                "$args": [
                    "account-name", 
                    "resource-group"
                ]
            }, 
            "update": {
                "$args": [
                    "custom-host-names", 
                    "description", 
                    "max-cache-age", 
                    "no-wait", 
                    "tags", 
                    "ips", 
                    "cdn-profile", 
                    "cdn-provider", 
                    "disable-cdn", 
                    "client-access-policy", 
                    "cross-domain-policy", 
                    "add", 
                    "force-string", 
                    "remove", 
                    "set", 
                    "account-name", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "start": {
                "$args": [
                    "no-wait", 
                    "account-name", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "akamai": {
                "add": {
                    "$args": [
                        "base64-key", 
                        "expiration", 
                        "identifier", 
                        "account-name", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "remove": {
                    "$args": [
                        "identifier", 
                        "account-name", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }
            }, 
            "delete": {
                "$args": [
                    "account-name", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "transform": {
            "show": {
                "$args": [
                    "account-name", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "create": {
                "$args": [
                    "account-name", 
                    "name", 
                    "preset", 
                    "resource-group", 
                    "description", 
                    "on-error", 
                    "relative-priority", 
                    "audio-language", 
                    "insights-to-extract"
                ]
            }, 
            "list": {
                "$args": [
                    "account-name", 
                    "resource-group", 
                    "filter", 
                    "skip", 
                    "top"
                ]
            }, 
            "update": {
                "$args": [
                    "description", 
                    "add", 
                    "force-string", 
                    "remove", 
                    "set", 
                    "account-name", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "output": {
                "add": {
                    "$args": [
                        "preset", 
                        "on-error", 
                        "relative-priority", 
                        "audio-language", 
                        "account-name", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription", 
                        "insights-to-extract"
                    ]
                }, 
                "remove": {
                    "$args": [
                        "output-index", 
                        "account-name", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }
            }, 
            "delete": {
                "$args": [
                    "account-name", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "asset-filter": {
            "create": {
                "$args": [
                    "account-name", 
                    "asset-name", 
                    "name", 
                    "resource-group", 
                    "bitrate", 
                    "tracks", 
                    "end-timestamp", 
                    "force-end-timestamp", 
                    "live-backoff-duration", 
                    "presentation-window-duration", 
                    "start-timestamp", 
                    "timescale"
                ]
            }, 
            "show": {
                "$args": [
                    "account-name", 
                    "asset-name", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "list": {
                "$args": [
                    "account-name", 
                    "asset-name", 
                    "resource-group"
                ]
            }, 
            "update": {
                "$args": [
                    "bitrate", 
                    "tracks", 
                    "add", 
                    "force-string", 
                    "remove", 
                    "set", 
                    "end-timestamp", 
                    "force-end-timestamp", 
                    "live-backoff-duration", 
                    "presentation-window-duration", 
                    "start-timestamp", 
                    "timescale", 
                    "account-name", 
                    "asset-name", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "delete": {
                "$args": [
                    "account-name", 
                    "asset-name", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "streaming-policy": {
            "create": {
                "$args": [
                    "account-name", 
                    "name", 
                    "resource-group", 
                    "default-content-key-policy-name", 
                    "no-encryption-protocols", 
                    "cbcs-clear-tracks", 
                    "cbcs-default-key-label", 
                    "cbcs-default-key-policy-name", 
                    "cbcs-fair-play-allow-persistent-license", 
                    "cbcs-fair-play-template", 
                    "cbcs-key-to-track-mappings", 
                    "cbcs-play-ready-attributes", 
                    "cbcs-play-ready-template", 
                    "cbcs-protocols", 
                    "cbcs-widevine-template", 
                    "cenc-clear-tracks", 
                    "cenc-default-key-label", 
                    "cenc-default-key-policy-name", 
                    "cenc-key-to-track-mappings", 
                    "cenc-play-ready-attributes", 
                    "cenc-play-ready-template", 
                    "cenc-protocols", 
                    "cenc-widevine-template", 
                    "envelope-clear-tracks", 
                    "envelope-default-key-label", 
                    "envelope-default-key-policy-name", 
                    "envelope-key-to-track-mappings", 
                    "envelope-protocols", 
                    "envelope-template"
                ]
            }, 
            "show": {
                "$args": [
                    "account-name", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "list": {
                "$args": [
                    "account-name", 
                    "resource-group", 
                    "filter", 
                    "orderby", 
                    "top"
                ]
            }, 
            "delete": {
                "$args": [
                    "account-name", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "content-key-policy": {
            "option": {
                "add": {
                    "$args": [
                        "policy-option-name", 
                        "clear-key-configuration", 
                        "ask", 
                        "fair-play-pfx", 
                        "fair-play-pfx-password", 
                        "rental-and-lease-key-type", 
                        "rental-duration", 
                        "open-restriction", 
                        "play-ready-template", 
                        "account-name", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription", 
                        "alt-rsa-token-keys", 
                        "alt-symmetric-token-keys", 
                        "alt-x509-token-keys", 
                        "audience", 
                        "issuer", 
                        "open-id-connect-discovery-document", 
                        "token-claims", 
                        "token-key", 
                        "token-key-type", 
                        "token-type", 
                        "widevine-template"
                    ]
                }, 
                "update": {
                    "$args": [
                        "policy-option-id", 
                        "policy-option-name", 
                        "ask", 
                        "fair-play-pfx", 
                        "fair-play-pfx-password", 
                        "rental-and-lease-key-type", 
                        "rental-duration", 
                        "play-ready-template", 
                        "account-name", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription", 
                        "add-alt-token-key", 
                        "add-alt-token-key-type", 
                        "audience", 
                        "issuer", 
                        "open-id-connect-discovery-document", 
                        "token-claims", 
                        "token-key", 
                        "token-key-type", 
                        "token-type", 
                        "widevine-template"
                    ]
                }, 
                "remove": {
                    "$args": [
                        "policy-option-id", 
                        "account-name", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }
            }, 
            "show": {
                "$args": [
                    "with-secrets", 
                    "account-name", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "create": {
                "$args": [
                    "account-name", 
                    "name", 
                    "policy-option-name", 
                    "resource-group", 
                    "description", 
                    "clear-key-configuration", 
                    "ask", 
                    "fair-play-pfx", 
                    "fair-play-pfx-password", 
                    "rental-and-lease-key-type", 
                    "rental-duration", 
                    "open-restriction", 
                    "play-ready-template", 
                    "alt-rsa-token-keys", 
                    "alt-symmetric-token-keys", 
                    "alt-x509-token-keys", 
                    "audience", 
                    "issuer", 
                    "open-id-connect-discovery-document", 
                    "token-claims", 
                    "token-key", 
                    "token-key-type", 
                    "token-type", 
                    "widevine-template"
                ]
            }, 
            "list": {
                "$args": [
                    "account-name", 
                    "resource-group", 
                    "filter", 
                    "orderby", 
                    "top"
                ]
            }, 
            "update": {
                "$args": [
                    "description", 
                    "add", 
                    "force-string", 
                    "remove", 
                    "set", 
                    "account-name", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "delete": {
                "$args": [
                    "account-name", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "live-output": {
            "create": {
                "$args": [
                    "account-name", 
                    "archive-window-length", 
                    "asset-name", 
                    "live-event-name", 
                    "name", 
                    "resource-group", 
                    "description", 
                    "fragments-per-ts-segment", 
                    "manifest-name", 
                    "output-snap-time"
                ]
            }, 
            "show": {
                "$args": [
                    "account-name", 
                    "ids", 
                    "live-event-name", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "list": {
                "$args": [
                    "account-name", 
                    "live-event-name", 
                    "resource-group"
                ]
            }, 
            "delete": {
                "$args": [
                    "account-name", 
                    "ids", 
                    "live-event-name", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "job": {
            "show": {
                "$args": [
                    "account-name", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription", 
                    "transform-name"
                ]
            }, 
            "list": {
                "$args": [
                    "account-name", 
                    "resource-group", 
                    "transform-name", 
                    "filter", 
                    "skip", 
                    "top"
                ]
            }, 
            "update": {
                "$args": [
                    "description", 
                    "priority", 
                    "add", 
                    "force-string", 
                    "remove", 
                    "set", 
                    "account-name", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription", 
                    "transform-name"
                ]
            }, 
            "start": {
                "$args": [
                    "output-assets", 
                    "correlation-data", 
                    "description", 
                    "files", 
                    "label", 
                    "priority", 
                    "input-asset-name", 
                    "base-uri", 
                    "account-name", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription", 
                    "transform-name"
                ]
            }, 
            "cancel": {
                "$args": [
                    "delete", 
                    "account-name", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription", 
                    "transform-name"
                ]
            }, 
            "delete": {
                "$args": [
                    "account-name", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription", 
                    "transform-name"
                ]
            }
        }, 
        "asset": {
            "show": {
                "$args": [
                    "account-name", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "create": {
                "$args": [
                    "account-name", 
                    "name", 
                    "resource-group", 
                    "alternate-id", 
                    "container", 
                    "description", 
                    "storage-account"
                ]
            }, 
            "list": {
                "$args": [
                    "account-name", 
                    "resource-group", 
                    "filter", 
                    "orderby", 
                    "top"
                ]
            }, 
            "update": {
                "$args": [
                    "alternate-id", 
                    "description", 
                    "add", 
                    "force-string", 
                    "remove", 
                    "set", 
                    "account-name", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "get-encryption-key": {
                "$args": [
                    "account-name", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "get-streaming-locators": {
                "$args": [
                    "account-name", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "delete": {
                "$args": [
                    "account-name", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "get-sas-urls": {
                "$args": [
                    "expiry", 
                    "permissions", 
                    "account-name", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "live-event": {
            "reset": {
                "$args": [
                    "no-wait", 
                    "account-name", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "show": {
                "$args": [
                    "account-name", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "stop": {
                "$args": [
                    "no-wait", 
                    "remove-outputs-on-stop", 
                    "account-name", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "create": {
                "$args": [
                    "account-name", 
                    "name", 
                    "resource-group", 
                    "auto-start", 
                    "description", 
                    "no-wait", 
                    "stream-options", 
                    "tags", 
                    "vanity-url", 
                    "client-access-policy", 
                    "cross-domain-policy", 
                    "encoding-type", 
                    "preset-name", 
                    "ips", 
                    "streaming-protocol", 
                    "access-token", 
                    "key-frame-interval-duration", 
                    "alternative-media-id", 
                    "preview-ips", 
                    "preview-locator", 
                    "streaming-policy-name"
                ]
            }, 
            "list": {
                "$args": [
                    "account-name", 
                    "resource-group"
                ]
            }, 
            "update": {
                "$args": [
                    "description", 
                    "tags", 
                    "client-access-policy", 
                    "cross-domain-policy", 
                    "add", 
                    "force-string", 
                    "remove", 
                    "set", 
                    "ips", 
                    "key-frame-interval-duration", 
                    "preview-ips", 
                    "account-name", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "start": {
                "$args": [
                    "no-wait", 
                    "account-name", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "delete": {
                "$args": [
                    "account-name", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "streaming-locator": {
            "get-content-keys": {
                "$args": [
                    "account-name", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "show": {
                "$args": [
                    "account-name", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "create": {
                "$args": [
                    "account-name", 
                    "asset-name", 
                    "name", 
                    "resource-group", 
                    "streaming-policy-name", 
                    "alternative-media-id", 
                    "content-key-policy-name", 
                    "content-keys", 
                    "end-time", 
                    "start-time", 
                    "streaming-locator-id"
                ]
            }, 
            "list": {
                "$args": [
                    "account-name", 
                    "resource-group", 
                    "filter", 
                    "orderby", 
                    "top"
                ]
            }, 
            "get-paths": {
                "$args": [
                    "account-name", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "delete": {
                "$args": [
                    "account-name", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "account-filter": {
            "create": {
                "$args": [
                    "account-name", 
                    "name", 
                    "resource-group", 
                    "bitrate", 
                    "tracks", 
                    "end-timestamp", 
                    "force-end-timestamp", 
                    "live-backoff-duration", 
                    "presentation-window-duration", 
                    "start-timestamp", 
                    "timescale"
                ]
            }, 
            "show": {
                "$args": [
                    "account-name", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "list": {
                "$args": [
                    "account-name", 
                    "resource-group"
                ]
            }, 
            "update": {
                "$args": [
                    "bitrate", 
                    "tracks", 
                    "add", 
                    "force-string", 
                    "remove", 
                    "set", 
                    "end-timestamp", 
                    "force-end-timestamp", 
                    "live-backoff-duration", 
                    "presentation-window-duration", 
                    "start-timestamp", 
                    "timescale", 
                    "account-name", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "delete": {
                "$args": [
                    "account-name", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }
    }, 
    "cloud": {
        "set": {
            "$args": [
                "name", 
                "profile"
            ]
        }, 
        "show": {
            "$args": [
                "name"
            ]
        }, 
        "unregister": {
            "$args": [
                "name"
            ]
        }, 
        "register": {
            "$args": [
                "name", 
                "cloud-config", 
                "endpoint-active-directory", 
                "endpoint-active-directory-data-lake-resource-id", 
                "endpoint-active-directory-graph-resource-id", 
                "endpoint-active-directory-resource-id", 
                "endpoint-gallery", 
                "endpoint-management", 
                "endpoint-resource-manager", 
                "endpoint-sql-management", 
                "endpoint-vm-image-alias-doc", 
                "profile", 
                "suffix-acr-login-server-endpoint", 
                "suffix-azure-datalake-analytics-catalog-and-job-endpoint", 
                "suffix-azure-datalake-store-file-system-endpoint", 
                "suffix-keyvault-dns", 
                "suffix-sql-server-hostname", 
                "suffix-storage-endpoint"
            ]
        }, 
        "list": {
            
        }, 
        "update": {
            "$args": [
                "cloud-config", 
                "endpoint-active-directory", 
                "endpoint-active-directory-data-lake-resource-id", 
                "endpoint-active-directory-graph-resource-id", 
                "endpoint-active-directory-resource-id", 
                "endpoint-gallery", 
                "endpoint-management", 
                "endpoint-resource-manager", 
                "endpoint-sql-management", 
                "endpoint-vm-image-alias-doc", 
                "name", 
                "profile", 
                "suffix-acr-login-server-endpoint", 
                "suffix-azure-datalake-analytics-catalog-and-job-endpoint", 
                "suffix-azure-datalake-store-file-system-endpoint", 
                "suffix-keyvault-dns", 
                "suffix-sql-server-hostname", 
                "suffix-storage-endpoint"
            ]
        }, 
        "list-profiles": {
            "$args": [
                "name", 
                "show-all"
            ]
        }
    }, 
    "postgres": {
        "server-logs": {
            "download": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "server-name"
                ]
            }, 
            "list": {
                "$args": [
                    "resource-group", 
                    "server-name", 
                    "file-last-written", 
                    "filename-contains", 
                    "max-file-size"
                ]
            }
        }, 
        "db": {
            "create": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "server-name", 
                    "charset", 
                    "collation"
                ]
            }, 
            "show": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "server-name"
                ]
            }, 
            "list": {
                "$args": [
                    "resource-group", 
                    "server-name"
                ]
            }, 
            "delete": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "server-name", 
                    "yes"
                ]
            }
        }, 
        "server": {
            "restore": {
                "$args": [
                    "restore-point-in-time", 
                    "source-server", 
                    "no-wait", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "show": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "georestore": {
                "$args": [
                    "location", 
                    "source-server", 
                    "backup-retention", 
                    "geo-redundant-backup", 
                    "no-wait", 
                    "sku-name", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "create": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "sku-name", 
                    "backup-retention", 
                    "geo-redundant-backup", 
                    "location", 
                    "ssl-enforcement", 
                    "storage-size", 
                    "tags", 
                    "version", 
                    "admin-password"
                ]
            }, 
            "vnet-rule": {
                "create": {
                    "$args": [
                        "name", 
                        "resource-group", 
                        "server-name", 
                        "subnet", 
                        "ignore-missing-endpoint", 
                        "vnet-name"
                    ]
                }, 
                "show": {
                    "$args": [
                        "ids", 
                        "name", 
                        "resource-group", 
                        "server-name", 
                        "subscription"
                    ]
                }, 
                "list": {
                    "$args": [
                        "ids", 
                        "resource-group", 
                        "server-name", 
                        "subscription"
                    ]
                }, 
                "update": {
                    "$args": [
                        "subnet", 
                        "ignore-missing-endpoint", 
                        "vnet-name", 
                        "add", 
                        "force-string", 
                        "remove", 
                        "set", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "server-name", 
                        "subscription"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "ids", 
                        "name", 
                        "resource-group", 
                        "server-name", 
                        "subscription"
                    ]
                }
            }, 
            "list": {
                "$args": [
                    "resource-group"
                ]
            }, 
            "update": {
                "$args": [
                    "admin-password", 
                    "backup-retention", 
                    "sku-name", 
                    "ssl-enforcement", 
                    "storage-size", 
                    "tags", 
                    "add", 
                    "force-string", 
                    "remove", 
                    "set", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "wait": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription", 
                    "custom", 
                    "exists", 
                    "interval", 
                    "timeout"
                ]
            }, 
            "configuration": {
                "set": {
                    "$args": [
                        "value", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "server-name", 
                        "subscription"
                    ]
                }, 
                "list": {
                    "$args": [
                        "ids", 
                        "resource-group", 
                        "server-name", 
                        "subscription"
                    ]
                }, 
                "show": {
                    "$args": [
                        "ids", 
                        "name", 
                        "resource-group", 
                        "server-name", 
                        "subscription"
                    ]
                }
            }, 
            "firewall-rule": {
                "create": {
                    "$args": [
                        "end-ip-address", 
                        "name", 
                        "resource-group", 
                        "server-name", 
                        "start-ip-address"
                    ]
                }, 
                "show": {
                    "$args": [
                        "ids", 
                        "name", 
                        "resource-group", 
                        "server-name", 
                        "subscription"
                    ]
                }, 
                "list": {
                    "$args": [
                        "ids", 
                        "resource-group", 
                        "server-name", 
                        "subscription"
                    ]
                }, 
                "update": {
                    "$args": [
                        "end-ip-address", 
                        "start-ip-address", 
                        "add", 
                        "force-string", 
                        "remove", 
                        "set", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "server-name", 
                        "subscription"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "yes", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "server-name", 
                        "subscription"
                    ]
                }
            }, 
            "delete": {
                "$args": [
                    "yes", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }
    }, 
    "dla": {
        "job": {
            "pipeline": {
                "list": {
                    "$args": [
                        "end-date-time", 
                        "start-date-time", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }, 
                "show": {
                    "$args": [
                        "pipeline-identity", 
                        "end-date-time", 
                        "start-date-time", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }
            }, 
            "show": {
                "$args": [
                    "job-identity", 
                    "account", 
                    "ids", 
                    "subscription"
                ]
            }, 
            "list": {
                "$args": [
                    "name", 
                    "pipeline-id", 
                    "recurrence-id", 
                    "result", 
                    "state", 
                    "submitted-after", 
                    "submitted-before", 
                    "submitter", 
                    "top", 
                    "account", 
                    "ids", 
                    "subscription"
                ]
            }, 
            "submit": {
                "$args": [
                    "job-name", 
                    "script", 
                    "compile-mode", 
                    "compile-only", 
                    "degree-of-parallelism", 
                    "priority", 
                    "runtime-version", 
                    "account", 
                    "ids", 
                    "subscription"
                ]
            }, 
            "recurrence": {
                "list": {
                    "$args": [
                        "end-date-time", 
                        "start-date-time", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }, 
                "show": {
                    "$args": [
                        "recurrence-identity", 
                        "end-date-time", 
                        "start-date-time", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }
            }, 
            "cancel": {
                "$args": [
                    "job-identity", 
                    "account", 
                    "ids", 
                    "subscription"
                ]
            }, 
            "wait": {
                "$args": [
                    "job-id", 
                    "max-wait-time-sec", 
                    "wait-interval-sec", 
                    "account", 
                    "ids", 
                    "subscription"
                ]
            }
        }, 
        "account": {
            "data-lake-store": {
                "add": {
                    "$args": [
                        "data-lake-store-account-name", 
                        "resource-group", 
                        "suffix", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }, 
                "show": {
                    "$args": [
                        "data-lake-store-account-name", 
                        "resource-group", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }, 
                "list": {
                    "$args": [
                        "count", 
                        "filter", 
                        "orderby", 
                        "resource-group", 
                        "select", 
                        "skip", 
                        "top", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "data-lake-store-account-name", 
                        "resource-group", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }
            }, 
            "show": {
                "$args": [
                    "resource-group", 
                    "account", 
                    "ids", 
                    "subscription"
                ]
            }, 
            "firewall": {
                "create": {
                    "$args": [
                        "account", 
                        "end-ip-address", 
                        "firewall-rule-name", 
                        "start-ip-address", 
                        "resource-group"
                    ]
                }, 
                "show": {
                    "$args": [
                        "firewall-rule-name", 
                        "resource-group", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }, 
                "list": {
                    "$args": [
                        "resource-group", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }, 
                "update": {
                    "$args": [
                        "firewall-rule-name", 
                        "end-ip-address", 
                        "resource-group", 
                        "start-ip-address", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "firewall-rule-name", 
                        "resource-group", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }
            }, 
            "create": {
                "$args": [
                    "account", 
                    "default-data-lake-store", 
                    "location", 
                    "max-degree-of-parallelism", 
                    "max-job-count", 
                    "query-store-retention", 
                    "resource-group", 
                    "tags", 
                    "tier"
                ]
            }, 
            "list": {
                "$args": [
                    "resource-group"
                ]
            }, 
            "update": {
                "$args": [
                    "allow-azure-ips", 
                    "firewall-state", 
                    "max-degree-of-parallelism", 
                    "max-job-count", 
                    "query-store-retention", 
                    "resource-group", 
                    "tags", 
                    "tier", 
                    "account", 
                    "ids", 
                    "subscription"
                ]
            }, 
            "blob-storage": {
                "add": {
                    "$args": [
                        "access-key", 
                        "resource-group", 
                        "suffix", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }, 
                "show": {
                    "$args": [
                        "storage-account-name", 
                        "resource-group", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }, 
                "list": {
                    "$args": [
                        "count", 
                        "filter", 
                        "orderby", 
                        "resource-group", 
                        "select", 
                        "skip", 
                        "top", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }, 
                "update": {
                    "$args": [
                        "access-key", 
                        "resource-group", 
                        "suffix", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "storage-account-name", 
                        "resource-group", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }
            }, 
            "compute-policy": {
                "create": {
                    "$args": [
                        "account", 
                        "compute-policy-name", 
                        "object-id", 
                        "object-type", 
                        "max-dop-per-job", 
                        "min-priority-per-job", 
                        "resource-group"
                    ]
                }, 
                "show": {
                    "$args": [
                        "compute-policy-name", 
                        "resource-group", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }, 
                "list": {
                    "$args": [
                        "resource-group", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }, 
                "update": {
                    "$args": [
                        "compute-policy-name", 
                        "max-dop-per-job", 
                        "min-priority-per-job", 
                        "resource-group", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "compute-policy-name", 
                        "resource-group", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }
            }, 
            "delete": {
                "$args": [
                    "resource-group", 
                    "account", 
                    "ids", 
                    "subscription"
                ]
            }
        }, 
        "catalog": {
            "credential": {
                "create": {
                    "$args": [
                        "account", 
                        "credential-name", 
                        "database-name", 
                        "user-name", 
                        "password"
                    ]
                }, 
                "show": {
                    "$args": [
                        "credential-name", 
                        "database-name", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }, 
                "list": {
                    "$args": [
                        "database-name", 
                        "count", 
                        "filter", 
                        "orderby", 
                        "select", 
                        "skip", 
                        "top", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }, 
                "update": {
                    "$args": [
                        "credential-name", 
                        "database-name", 
                        "user-name", 
                        "new-password", 
                        "password", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "credential-name", 
                        "database-name", 
                        "cascade", 
                        "password", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }
            }, 
            "tvf": {
                "list": {
                    "$args": [
                        "database-name", 
                        "schema-name", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }, 
                "show": {
                    "$args": [
                        "database-name", 
                        "schema-name", 
                        "table-valued-function-name", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }
            }, 
            "assembly": {
                "list": {
                    "$args": [
                        "database-name", 
                        "count", 
                        "filter", 
                        "orderby", 
                        "select", 
                        "skip", 
                        "top", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }, 
                "show": {
                    "$args": [
                        "assembly-name", 
                        "database-name", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }
            }, 
            "package": {
                "list": {
                    "$args": [
                        "database-name", 
                        "schema-name", 
                        "count", 
                        "filter", 
                        "orderby", 
                        "select", 
                        "skip", 
                        "top", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }, 
                "show": {
                    "$args": [
                        "database-name", 
                        "package-name", 
                        "schema-name", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }
            }, 
            "external-data-source": {
                "list": {
                    "$args": [
                        "database-name", 
                        "count", 
                        "filter", 
                        "orderby", 
                        "select", 
                        "skip", 
                        "top", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }, 
                "show": {
                    "$args": [
                        "database-name", 
                        "external-data-source-name", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }
            }, 
            "table-partition": {
                "list": {
                    "$args": [
                        "database-name", 
                        "schema-name", 
                        "table-name", 
                        "count", 
                        "filter", 
                        "orderby", 
                        "select", 
                        "skip", 
                        "top", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }, 
                "show": {
                    "$args": [
                        "database-name", 
                        "partition-name", 
                        "schema-name", 
                        "table-name", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }
            }, 
            "database": {
                "list": {
                    "$args": [
                        "count", 
                        "filter", 
                        "orderby", 
                        "select", 
                        "skip", 
                        "top", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }, 
                "show": {
                    "$args": [
                        "database-name", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }
            }, 
            "view": {
                "list": {
                    "$args": [
                        "database-name", 
                        "schema-name", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }, 
                "show": {
                    "$args": [
                        "database-name", 
                        "schema-name", 
                        "view-name", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }
            }, 
            "table-stats": {
                "list": {
                    "$args": [
                        "database-name", 
                        "schema-name", 
                        "table-name", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }, 
                "show": {
                    "$args": [
                        "database-name", 
                        "schema-name", 
                        "statistics-name", 
                        "table-name", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }
            }, 
            "table": {
                "list": {
                    "$args": [
                        "database-name", 
                        "schema-name", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }, 
                "show": {
                    "$args": [
                        "database-name", 
                        "schema-name", 
                        "table-name", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }
            }, 
            "table-type": {
                "list": {
                    "$args": [
                        "database-name", 
                        "schema-name", 
                        "count", 
                        "filter", 
                        "orderby", 
                        "select", 
                        "skip", 
                        "top", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }, 
                "show": {
                    "$args": [
                        "database-name", 
                        "schema-name", 
                        "table-type-name", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }
            }, 
            "procedure": {
                "list": {
                    "$args": [
                        "database-name", 
                        "schema-name", 
                        "count", 
                        "filter", 
                        "orderby", 
                        "select", 
                        "skip", 
                        "top", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }, 
                "show": {
                    "$args": [
                        "database-name", 
                        "procedure-name", 
                        "schema-name", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }
            }, 
            "schema": {
                "list": {
                    "$args": [
                        "database-name", 
                        "count", 
                        "filter", 
                        "orderby", 
                        "select", 
                        "skip", 
                        "top", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }, 
                "show": {
                    "$args": [
                        "database-name", 
                        "schema-name", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }
            }
        }
    }, 
    "servicebus": {
        "georecovery-alias": {
            "set": {
                "$args": [
                    "partner-namespace", 
                    "alternate-name", 
                    "alias", 
                    "ids", 
                    "namespace-name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "authorization-rule": {
                "keys": {
                    "list": {
                        "$args": [
                            "alias", 
                            "name", 
                            "namespace-name", 
                            "resource-group"
                        ]
                    }
                }, 
                "list": {
                    "$args": [
                        "alias", 
                        "namespace-name", 
                        "resource-group"
                    ]
                }, 
                "show": {
                    "$args": [
                        "alias", 
                        "ids", 
                        "name", 
                        "namespace-name", 
                        "resource-group", 
                        "subscription"
                    ]
                }
            }, 
            "exists": {
                "$args": [
                    "alias", 
                    "namespace-name", 
                    "resource-group"
                ]
            }, 
            "show": {
                "$args": [
                    "alias", 
                    "ids", 
                    "namespace-name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "break-pair": {
                "$args": [
                    "alias", 
                    "ids", 
                    "namespace-name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "list": {
                "$args": [
                    "namespace-name", 
                    "resource-group"
                ]
            }, 
            "fail-over": {
                "$args": [
                    "alias", 
                    "ids", 
                    "namespace-name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "delete": {
                "$args": [
                    "alias", 
                    "ids", 
                    "namespace-name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "queue": {
            "authorization-rule": {
                "show": {
                    "$args": [
                        "ids", 
                        "name", 
                        "namespace-name", 
                        "queue-name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "keys": {
                    "renew": {
                        "$args": [
                            "key", 
                            "key-value", 
                            "ids", 
                            "name", 
                            "namespace-name", 
                            "queue-name", 
                            "resource-group", 
                            "subscription"
                        ]
                    }, 
                    "list": {
                        "$args": [
                            "name", 
                            "namespace-name", 
                            "queue-name", 
                            "resource-group"
                        ]
                    }
                }, 
                "create": {
                    "$args": [
                        "name", 
                        "namespace-name", 
                        "queue-name", 
                        "resource-group", 
                        "rights"
                    ]
                }, 
                "list": {
                    "$args": [
                        "namespace-name", 
                        "queue-name", 
                        "resource-group"
                    ]
                }, 
                "update": {
                    "$args": [
                        "rights", 
                        "add", 
                        "force-string", 
                        "remove", 
                        "set", 
                        "ids", 
                        "name", 
                        "namespace-name", 
                        "queue-name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "ids", 
                        "name", 
                        "namespace-name", 
                        "queue-name", 
                        "resource-group", 
                        "subscription"
                    ]
                }
            }, 
            "show": {
                "$args": [
                    "ids", 
                    "name", 
                    "namespace-name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "create": {
                "$args": [
                    "name", 
                    "namespace-name", 
                    "resource-group", 
                    "auto-delete-on-idle", 
                    "default-message-time-to-live", 
                    "duplicate-detection-history-time-window", 
                    "enable-batched-operations", 
                    "enable-dead-lettering-on-message-expiration", 
                    "enable-duplicate-detection", 
                    "enable-express", 
                    "enable-partitioning", 
                    "enable-session", 
                    "forward-dead-lettered-messages-to", 
                    "forward-to", 
                    "lock-duration", 
                    "max-delivery-count", 
                    "max-size", 
                    "status"
                ]
            }, 
            "list": {
                "$args": [
                    "namespace-name", 
                    "resource-group", 
                    "skip", 
                    "top"
                ]
            }, 
            "update": {
                "$args": [
                    "auto-delete-on-idle", 
                    "default-message-time-to-live", 
                    "duplicate-detection-history-time-window", 
                    "enable-batched-operations", 
                    "enable-dead-lettering-on-message-expiration", 
                    "enable-duplicate-detection", 
                    "enable-express", 
                    "enable-partitioning", 
                    "enable-session", 
                    "forward-dead-lettered-messages-to", 
                    "forward-to", 
                    "lock-duration", 
                    "max-delivery-count", 
                    "max-size", 
                    "status", 
                    "add", 
                    "force-string", 
                    "remove", 
                    "set", 
                    "ids", 
                    "name", 
                    "namespace-name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "delete": {
                "$args": [
                    "ids", 
                    "name", 
                    "namespace-name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "topic": {
            "authorization-rule": {
                "show": {
                    "$args": [
                        "ids", 
                        "name", 
                        "namespace-name", 
                        "resource-group", 
                        "subscription", 
                        "topic-name"
                    ]
                }, 
                "keys": {
                    "renew": {
                        "$args": [
                            "key", 
                            "key-value", 
                            "ids", 
                            "name", 
                            "namespace-name", 
                            "resource-group", 
                            "subscription", 
                            "topic-name"
                        ]
                    }, 
                    "list": {
                        "$args": [
                            "name", 
                            "namespace-name", 
                            "resource-group", 
                            "topic-name"
                        ]
                    }
                }, 
                "create": {
                    "$args": [
                        "name", 
                        "namespace-name", 
                        "resource-group", 
                        "rights", 
                        "topic-name"
                    ]
                }, 
                "list": {
                    "$args": [
                        "namespace-name", 
                        "resource-group", 
                        "topic-name"
                    ]
                }, 
                "update": {
                    "$args": [
                        "rights", 
                        "add", 
                        "force-string", 
                        "remove", 
                        "set", 
                        "ids", 
                        "name", 
                        "namespace-name", 
                        "resource-group", 
                        "subscription", 
                        "topic-name"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "ids", 
                        "name", 
                        "namespace-name", 
                        "resource-group", 
                        "subscription", 
                        "topic-name"
                    ]
                }
            }, 
            "show": {
                "$args": [
                    "ids", 
                    "name", 
                    "namespace-name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "create": {
                "$args": [
                    "name", 
                    "namespace-name", 
                    "resource-group", 
                    "auto-delete-on-idle", 
                    "default-message-time-to-live", 
                    "duplicate-detection-history-time-window", 
                    "enable-batched-operations", 
                    "enable-duplicate-detection", 
                    "enable-express", 
                    "enable-ordering", 
                    "enable-partitioning", 
                    "max-size", 
                    "status"
                ]
            }, 
            "list": {
                "$args": [
                    "namespace-name", 
                    "resource-group", 
                    "skip", 
                    "top"
                ]
            }, 
            "update": {
                "$args": [
                    "auto-delete-on-idle", 
                    "default-message-time-to-live", 
                    "duplicate-detection-history-time-window", 
                    "enable-batched-operations", 
                    "enable-duplicate-detection", 
                    "enable-express", 
                    "enable-ordering", 
                    "enable-partitioning", 
                    "max-size", 
                    "status", 
                    "add", 
                    "force-string", 
                    "remove", 
                    "set", 
                    "ids", 
                    "name", 
                    "namespace-name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "subscription": {
                "show": {
                    "$args": [
                        "ids", 
                        "name", 
                        "namespace-name", 
                        "resource-group", 
                        "subscription", 
                        "topic-name"
                    ]
                }, 
                "create": {
                    "$args": [
                        "name", 
                        "namespace-name", 
                        "resource-group", 
                        "topic-name", 
                        "auto-delete-on-idle", 
                        "dead-letter-on-filter-exceptions", 
                        "default-message-time-to-live", 
                        "enable-batched-operations", 
                        "enable-dead-lettering-on-message-expiration", 
                        "enable-session", 
                        "forward-dead-lettered-messages-to", 
                        "forward-to", 
                        "lock-duration", 
                        "max-delivery-count", 
                        "status"
                    ]
                }, 
                "list": {
                    "$args": [
                        "namespace-name", 
                        "resource-group", 
                        "topic-name", 
                        "skip", 
                        "top"
                    ]
                }, 
                "update": {
                    "$args": [
                        "auto-delete-on-idle", 
                        "dead-letter-on-filter-exceptions", 
                        "default-message-time-to-live", 
                        "enable-batched-operations", 
                        "enable-dead-lettering-on-message-expiration", 
                        "enable-session", 
                        "forward-dead-lettered-messages-to", 
                        "forward-to", 
                        "lock-duration", 
                        "max-delivery-count", 
                        "status", 
                        "add", 
                        "force-string", 
                        "remove", 
                        "set", 
                        "ids", 
                        "name", 
                        "namespace-name", 
                        "resource-group", 
                        "subscription", 
                        "topic-name"
                    ]
                }, 
                "rule": {
                    "create": {
                        "$args": [
                            "name", 
                            "namespace-name", 
                            "resource-group", 
                            "subscription-name", 
                            "topic-name", 
                            "action-compatibility-level", 
                            "action-sql-expression", 
                            "enable-action-preprocessing", 
                            "content-type", 
                            "correlation-id", 
                            "enable-correlation-preprocessing", 
                            "label", 
                            "message-id", 
                            "reply-to", 
                            "reply-to-session-id", 
                            "session-id", 
                            "to", 
                            "enable-sql-preprocessing", 
                            "filter-sql-expression"
                        ]
                    }, 
                    "show": {
                        "$args": [
                            "ids", 
                            "name", 
                            "namespace-name", 
                            "resource-group", 
                            "subscription", 
                            "subscription-name", 
                            "topic-name"
                        ]
                    }, 
                    "list": {
                        "$args": [
                            "namespace-name", 
                            "resource-group", 
                            "subscription-name", 
                            "topic-name", 
                            "skip", 
                            "top"
                        ]
                    }, 
                    "update": {
                        "$args": [
                            "action-compatibility-level", 
                            "action-sql-expression", 
                            "enable-action-preprocessing", 
                            "content-type", 
                            "correlation-id", 
                            "enable-correlation-preprocessing", 
                            "label", 
                            "message-id", 
                            "reply-to", 
                            "reply-to-session-id", 
                            "session-id", 
                            "to", 
                            "add", 
                            "force-string", 
                            "remove", 
                            "set", 
                            "ids", 
                            "name", 
                            "namespace-name", 
                            "resource-group", 
                            "subscription", 
                            "subscription-name", 
                            "topic-name", 
                            "enable-sql-preprocessing", 
                            "filter-sql-expression"
                        ]
                    }, 
                    "delete": {
                        "$args": [
                            "ids", 
                            "name", 
                            "namespace-name", 
                            "resource-group", 
                            "subscription", 
                            "subscription-name", 
                            "topic-name"
                        ]
                    }
                }, 
                "delete": {
                    "$args": [
                        "ids", 
                        "name", 
                        "namespace-name", 
                        "resource-group", 
                        "subscription", 
                        "topic-name"
                    ]
                }
            }, 
            "delete": {
                "$args": [
                    "ids", 
                    "name", 
                    "namespace-name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "namespace": {
            "authorization-rule": {
                "show": {
                    "$args": [
                        "ids", 
                        "name", 
                        "namespace-name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "keys": {
                    "renew": {
                        "$args": [
                            "key", 
                            "key-value", 
                            "ids", 
                            "name", 
                            "namespace-name", 
                            "resource-group", 
                            "subscription"
                        ]
                    }, 
                    "list": {
                        "$args": [
                            "name", 
                            "namespace-name", 
                            "resource-group"
                        ]
                    }
                }, 
                "create": {
                    "$args": [
                        "name", 
                        "namespace-name", 
                        "resource-group", 
                        "rights"
                    ]
                }, 
                "list": {
                    "$args": [
                        "namespace-name", 
                        "resource-group"
                    ]
                }, 
                "update": {
                    "$args": [
                        "rights", 
                        "add", 
                        "force-string", 
                        "remove", 
                        "set", 
                        "ids", 
                        "name", 
                        "namespace-name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "ids", 
                        "name", 
                        "namespace-name", 
                        "resource-group", 
                        "subscription"
                    ]
                }
            }, 
            "exists": {
                "$args": [
                    "name"
                ]
            }, 
            "show": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "create": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "capacity", 
                    "location", 
                    "sku", 
                    "tags"
                ]
            }, 
            "list": {
                "$args": [
                    "resource-group"
                ]
            }, 
            "update": {
                "$args": [
                    "capacity", 
                    "sku", 
                    "tags", 
                    "add", 
                    "force-string", 
                    "remove", 
                    "set", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "delete": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "migration": {
            "start": {
                "$args": [
                    "post-migration-name", 
                    "target-namespace", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "abort": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "complete": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "show": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }
    }, 
    "container": {
        "logs": {
            "$args": [
                "container-name", 
                "follow", 
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "exec": {
            "$args": [
                "exec-command", 
                "container-name", 
                "terminal-col-size", 
                "terminal-row-size", 
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "stop": {
            "$args": [
                "name", 
                "resource-group"
            ]
        }, 
        "create": {
            "$args": [
                "resource-group", 
                "command-line", 
                "cpu", 
                "dns-name-label", 
                "environment-variables", 
                "file", 
                "image", 
                "ip-address", 
                "location", 
                "memory", 
                "name", 
                "no-wait", 
                "os-type", 
                "ports", 
                "protocol", 
                "restart-policy", 
                "secrets", 
                "secrets-mount-path", 
                "secure-environment-variables", 
                "azure-file-volume-account-key", 
                "azure-file-volume-account-name", 
                "azure-file-volume-mount-path", 
                "azure-file-volume-share-name", 
                "gitrepo-dir", 
                "gitrepo-mount-path", 
                "gitrepo-revision", 
                "gitrepo-url", 
                "registry-login-server", 
                "registry-password", 
                "registry-username", 
                "log-analytics-workspace", 
                "log-analytics-workspace-key", 
                "assign-identity", 
                "role", 
                "scope", 
                "network-profile", 
                "subnet", 
                "subnet-address-prefix", 
                "vnet", 
                "vnet-address-prefix"
            ]
        }, 
        "show": {
            "$args": [
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "list": {
            "$args": [
                "resource-group"
            ]
        }, 
        "attach": {
            "$args": [
                "container-name", 
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "export": {
            "$args": [
                "file", 
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "restart": {
            "$args": [
                "name", 
                "resource-group"
            ]
        }, 
        "delete": {
            "$args": [
                "yes", 
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }
    }, 
    "batchai": {
        "workspace": {
            "create": {
                "$args": [
                    "resource-group", 
                    "workspace", 
                    "location"
                ]
            }, 
            "show": {
                "$args": [
                    "ids", 
                    "resource-group", 
                    "subscription", 
                    "workspace"
                ]
            }, 
            "list": {
                "$args": [
                    "resource-group"
                ]
            }, 
            "delete": {
                "$args": [
                    "no-wait", 
                    "yes", 
                    "ids", 
                    "resource-group", 
                    "subscription", 
                    "workspace"
                ]
            }
        }, 
        "file-server": {
            "create": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "workspace", 
                    "no-wait", 
                    "vm-size", 
                    "generate-ssh-keys", 
                    "password", 
                    "ssh-key", 
                    "user-name", 
                    "config-file", 
                    "caching-type", 
                    "disk-count", 
                    "disk-size", 
                    "storage-sku", 
                    "subnet"
                ]
            }, 
            "show": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription", 
                    "workspace"
                ]
            }, 
            "list": {
                "$args": [
                    "resource-group", 
                    "workspace"
                ]
            }, 
            "delete": {
                "$args": [
                    "no-wait", 
                    "yes", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription", 
                    "workspace"
                ]
            }
        }, 
        "cluster": {
            "node": {
                "list": {
                    "$args": [
                        "cluster", 
                        "resource-group", 
                        "workspace"
                    ]
                }, 
                "exec": {
                    "$args": [
                        "cluster", 
                        "resource-group", 
                        "workspace", 
                        "address", 
                        "exec", 
                        "node-id", 
                        "password", 
                        "ssh-private-key"
                    ]
                }
            }, 
            "show": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription", 
                    "workspace"
                ]
            }, 
            "create": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "workspace", 
                    "generate-ssh-keys", 
                    "password", 
                    "ssh-key", 
                    "user-name", 
                    "config-file", 
                    "use-auto-storage", 
                    "afs-mount-path", 
                    "afs-name", 
                    "bfs-mount-path", 
                    "bfs-name", 
                    "storage-account-key", 
                    "storage-account-name", 
                    "nfs", 
                    "nfs-mount-path", 
                    "custom-image", 
                    "image", 
                    "max", 
                    "min", 
                    "target", 
                    "vm-priority", 
                    "vm-size", 
                    "setup-task", 
                    "setup-task-output", 
                    "subnet"
                ]
            }, 
            "list": {
                "$args": [
                    "resource-group", 
                    "workspace"
                ]
            }, 
            "auto-scale": {
                "$args": [
                    "max", 
                    "min", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription", 
                    "workspace"
                ]
            }, 
            "file": {
                "list": {
                    "$args": [
                        "cluster", 
                        "resource-group", 
                        "workspace", 
                        "expiry", 
                        "path"
                    ]
                }
            }, 
            "resize": {
                "$args": [
                    "target", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription", 
                    "workspace"
                ]
            }, 
            "delete": {
                "$args": [
                    "no-wait", 
                    "yes", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription", 
                    "workspace"
                ]
            }
        }, 
        "job": {
            "node": {
                "list": {
                    "$args": [
                        "experiment", 
                        "job", 
                        "resource-group", 
                        "workspace"
                    ]
                }, 
                "exec": {
                    "$args": [
                        "experiment", 
                        "job", 
                        "resource-group", 
                        "workspace", 
                        "address", 
                        "exec", 
                        "node-id", 
                        "password", 
                        "ssh-private-key"
                    ]
                }
            }, 
            "show": {
                "$args": [
                    "experiment", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription", 
                    "workspace"
                ]
            }, 
            "terminate": {
                "$args": [
                    "no-wait", 
                    "yes", 
                    "experiment", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription", 
                    "workspace"
                ]
            }, 
            "create": {
                "$args": [
                    "cluster", 
                    "config-file", 
                    "experiment", 
                    "name", 
                    "resource-group", 
                    "workspace", 
                    "afs-mount-path", 
                    "afs-name", 
                    "bfs-mount-path", 
                    "bfs-name", 
                    "storage-account-key", 
                    "storage-account-name", 
                    "nfs", 
                    "nfs-mount-path"
                ]
            }, 
            "list": {
                "$args": [
                    "experiment", 
                    "resource-group", 
                    "workspace"
                ]
            }, 
            "file": {
                "list": {
                    "$args": [
                        "experiment", 
                        "job", 
                        "resource-group", 
                        "workspace", 
                        "expiry", 
                        "output-directory-id", 
                        "path"
                    ]
                }, 
                "stream": {
                    "$args": [
                        "experiment", 
                        "file-name", 
                        "job", 
                        "resource-group", 
                        "workspace", 
                        "output-directory-id", 
                        "path"
                    ]
                }
            }, 
            "wait": {
                "$args": [
                    "interval", 
                    "experiment", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription", 
                    "workspace"
                ]
            }, 
            "delete": {
                "$args": [
                    "no-wait", 
                    "yes", 
                    "experiment", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription", 
                    "workspace"
                ]
            }
        }, 
        "experiment": {
            "create": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "workspace"
                ]
            }, 
            "show": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription", 
                    "workspace"
                ]
            }, 
            "list": {
                "$args": [
                    "resource-group", 
                    "workspace"
                ]
            }, 
            "delete": {
                "$args": [
                    "no-wait", 
                    "yes", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription", 
                    "workspace"
                ]
            }
        }, 
        "list-usages": {
            "$args": [
                "location"
            ]
        }
    }, 
    "consumption": {
        "pricesheet": {
            "show": {
                "$args": [
                    "billing-period-name", 
                    "include-meter-details"
                ]
            }
        }, 
        "reservation": {
            "detail": {
                "list": {
                    "$args": [
                        "end-date", 
                        "reservation-order-id", 
                        "start-date", 
                        "reservation-id"
                    ]
                }
            }, 
            "summary": {
                "list": {
                    "$args": [
                        "grain", 
                        "reservation-order-id", 
                        "end-date", 
                        "reservation-id", 
                        "start-date"
                    ]
                }
            }
        }, 
        "marketplace": {
            "list": {
                "$args": [
                    "billing-period-name", 
                    "end-date", 
                    "start-date", 
                    "top"
                ]
            }
        }, 
        "budget": {
            "create": {
                "$args": [
                    "amount", 
                    "budget-name", 
                    "category", 
                    "end-date", 
                    "start-date", 
                    "time-grain", 
                    "meter-filter", 
                    "resource-filter", 
                    "resource-group", 
                    "resource-group-filter"
                ]
            }, 
            "show": {
                "$args": [
                    "budget-name", 
                    "resource-group"
                ]
            }, 
            "list": {
                "$args": [
                    "resource-group"
                ]
            }, 
            "delete": {
                "$args": [
                    "budget-name", 
                    "resource-group"
                ]
            }
        }, 
        "usage": {
            "list": {
                "$args": [
                    "billing-period-name", 
                    "end-date", 
                    "include-additional-properties", 
                    "include-meter-details", 
                    "start-date", 
                    "top"
                ]
            }
        }
    }, 
    "maps": {
        "account": {
            "show": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "keys": {
                "renew": {
                    "$args": [
                        "key", 
                        "name", 
                        "resource-group"
                    ]
                }, 
                "list": {
                    "$args": [
                        "name", 
                        "resource-group"
                    ]
                }
            }, 
            "create": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "accept-tos", 
                    "sku", 
                    "tags"
                ]
            }, 
            "list": {
                "$args": [
                    "resource-group"
                ]
            }, 
            "update": {
                "$args": [
                    "sku", 
                    "tags", 
                    "add", 
                    "force-string", 
                    "remove", 
                    "set", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "delete": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }
    }, 
    "storage": {
        "queue": {
            "stats": {
                "$args": [
                    "auth-mode", 
                    "timeout", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "exists": {
                "$args": [
                    "name", 
                    "auth-mode", 
                    "timeout", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "create": {
                "$args": [
                    "name", 
                    "auth-mode", 
                    "fail-on-exist", 
                    "metadata", 
                    "timeout", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "list": {
                "$args": [
                    "auth-mode", 
                    "include-metadata", 
                    "marker", 
                    "num-results", 
                    "prefix", 
                    "timeout", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "generate-sas": {
                "$args": [
                    "name", 
                    "auth-mode", 
                    "expiry", 
                    "https-only", 
                    "ip", 
                    "permissions", 
                    "policy-name", 
                    "start", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "policy": {
                "create": {
                    "$args": [
                        "name", 
                        "queue-name", 
                        "auth-mode", 
                        "expiry", 
                        "permissions", 
                        "start", 
                        "account-key", 
                        "account-name", 
                        "connection-string", 
                        "sas-token"
                    ]
                }, 
                "show": {
                    "$args": [
                        "name", 
                        "queue-name", 
                        "auth-mode", 
                        "account-key", 
                        "account-name", 
                        "connection-string", 
                        "sas-token"
                    ]
                }, 
                "list": {
                    "$args": [
                        "queue-name", 
                        "auth-mode", 
                        "account-key", 
                        "account-name", 
                        "connection-string", 
                        "sas-token"
                    ]
                }, 
                "update": {
                    "$args": [
                        "name", 
                        "queue-name", 
                        "auth-mode", 
                        "expiry", 
                        "permissions", 
                        "start", 
                        "account-key", 
                        "account-name", 
                        "connection-string", 
                        "sas-token"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "name", 
                        "queue-name", 
                        "auth-mode", 
                        "account-key", 
                        "account-name", 
                        "connection-string", 
                        "sas-token"
                    ]
                }
            }, 
            "metadata": {
                "update": {
                    "$args": [
                        "name", 
                        "auth-mode", 
                        "metadata", 
                        "timeout", 
                        "account-key", 
                        "account-name", 
                        "connection-string", 
                        "sas-token"
                    ]
                }, 
                "show": {
                    "$args": [
                        "name", 
                        "auth-mode", 
                        "timeout", 
                        "account-key", 
                        "account-name", 
                        "connection-string", 
                        "sas-token"
                    ]
                }
            }, 
            "delete": {
                "$args": [
                    "name", 
                    "auth-mode", 
                    "fail-not-exist", 
                    "timeout", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }
        }, 
        "account": {
            "show": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "keys": {
                "renew": {
                    "$args": [
                        "account-name", 
                        "key", 
                        "resource-group"
                    ]
                }, 
                "list": {
                    "$args": [
                        "account-name", 
                        "resource-group"
                    ]
                }
            }, 
            "create": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "access-tier", 
                    "assign-identity", 
                    "custom-domain", 
                    "encryption-services", 
                    "https-only", 
                    "kind", 
                    "location", 
                    "sku", 
                    "tags", 
                    "bypass", 
                    "default-action"
                ]
            }, 
            "list": {
                "$args": [
                    "resource-group"
                ]
            }, 
            "update": {
                "$args": [
                    "access-tier", 
                    "assign-identity", 
                    "custom-domain", 
                    "encryption-services", 
                    "https-only", 
                    "sku", 
                    "tags", 
                    "use-subdomain", 
                    "encryption-key-name", 
                    "encryption-key-source", 
                    "encryption-key-vault", 
                    "encryption-key-version", 
                    "add", 
                    "force-string", 
                    "remove", 
                    "set", 
                    "bypass", 
                    "default-action", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "check-name": {
                "$args": [
                    "name"
                ]
            }, 
            "network-rule": {
                "add": {
                    "$args": [
                        "account-name", 
                        "action", 
                        "ip-address", 
                        "resource-group", 
                        "subnet", 
                        "vnet-name"
                    ]
                }, 
                "list": {
                    "$args": [
                        "account-name", 
                        "resource-group"
                    ]
                }, 
                "remove": {
                    "$args": [
                        "account-name", 
                        "ip-address", 
                        "resource-group", 
                        "subnet", 
                        "vnet-name"
                    ]
                }
            }, 
            "show-connection-string": {
                "$args": [
                    "blob-endpoint", 
                    "file-endpoint", 
                    "key", 
                    "protocol", 
                    "queue-endpoint", 
                    "sas-token", 
                    "table-endpoint", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "generate-sas": {
                "$args": [
                    "expiry", 
                    "permissions", 
                    "resource-types", 
                    "services", 
                    "https-only", 
                    "ip", 
                    "start", 
                    "account-name", 
                    "ids", 
                    "subscription", 
                    "account-key", 
                    "connection-string"
                ]
            }, 
            "show-usage": {
                "$args": [
                    "location"
                ]
            }, 
            "delete": {
                "$args": [
                    "yes", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "container": {
            "delete": {
                "$args": [
                    "name", 
                    "auth-mode", 
                    "bypass-immutability-policy", 
                    "fail-not-exist", 
                    "lease-id", 
                    "timeout", 
                    "if-modified-since", 
                    "if-unmodified-since", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "set-permission": {
                "$args": [
                    "name", 
                    "auth-mode", 
                    "lease-id", 
                    "public-access", 
                    "timeout", 
                    "if-modified-since", 
                    "if-unmodified-since", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "exists": {
                "$args": [
                    "name", 
                    "auth-mode", 
                    "timeout", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "show": {
                "$args": [
                    "name", 
                    "auth-mode", 
                    "lease-id", 
                    "timeout", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "legal-hold": {
                "clear": {
                    "$args": [
                        "account-name", 
                        "container-name", 
                        "tags", 
                        "resource-group"
                    ]
                }, 
                "set": {
                    "$args": [
                        "account-name", 
                        "container-name", 
                        "tags", 
                        "resource-group"
                    ]
                }, 
                "show": {
                    "$args": [
                        "account-name", 
                        "container-name", 
                        "resource-group"
                    ]
                }
            }, 
            "create": {
                "$args": [
                    "name", 
                    "auth-mode", 
                    "fail-on-exist", 
                    "metadata", 
                    "public-access", 
                    "timeout", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "list": {
                "$args": [
                    "auth-mode", 
                    "include-metadata", 
                    "num-results", 
                    "prefix", 
                    "timeout", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "show-permission": {
                "$args": [
                    "name", 
                    "auth-mode", 
                    "lease-id", 
                    "timeout", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "generate-sas": {
                "$args": [
                    "name", 
                    "auth-mode", 
                    "cache-control", 
                    "content-disposition", 
                    "content-encoding", 
                    "content-language", 
                    "content-type", 
                    "expiry", 
                    "https-only", 
                    "ip", 
                    "permissions", 
                    "policy-name", 
                    "start", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "policy": {
                "create": {
                    "$args": [
                        "container-name", 
                        "name", 
                        "auth-mode", 
                        "expiry", 
                        "lease-id", 
                        "permissions", 
                        "start", 
                        "account-key", 
                        "account-name", 
                        "connection-string", 
                        "sas-token"
                    ]
                }, 
                "show": {
                    "$args": [
                        "container-name", 
                        "name", 
                        "auth-mode", 
                        "lease-id", 
                        "account-key", 
                        "account-name", 
                        "connection-string", 
                        "sas-token"
                    ]
                }, 
                "list": {
                    "$args": [
                        "container-name", 
                        "auth-mode", 
                        "lease-id", 
                        "account-key", 
                        "account-name", 
                        "connection-string", 
                        "sas-token"
                    ]
                }, 
                "update": {
                    "$args": [
                        "container-name", 
                        "name", 
                        "auth-mode", 
                        "expiry", 
                        "lease-id", 
                        "permissions", 
                        "start", 
                        "account-key", 
                        "account-name", 
                        "connection-string", 
                        "sas-token"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "container-name", 
                        "name", 
                        "auth-mode", 
                        "lease-id", 
                        "account-key", 
                        "account-name", 
                        "connection-string", 
                        "sas-token"
                    ]
                }
            }, 
            "lease": {
                "break": {
                    "$args": [
                        "container-name", 
                        "auth-mode", 
                        "lease-break-period", 
                        "timeout", 
                        "if-modified-since", 
                        "if-unmodified-since", 
                        "account-key", 
                        "account-name", 
                        "connection-string", 
                        "sas-token"
                    ]
                }, 
                "release": {
                    "$args": [
                        "container-name", 
                        "lease-id", 
                        "auth-mode", 
                        "timeout", 
                        "if-modified-since", 
                        "if-unmodified-since", 
                        "account-key", 
                        "account-name", 
                        "connection-string", 
                        "sas-token"
                    ]
                }, 
                "renew": {
                    "$args": [
                        "container-name", 
                        "lease-id", 
                        "auth-mode", 
                        "timeout", 
                        "if-modified-since", 
                        "if-unmodified-since", 
                        "account-key", 
                        "account-name", 
                        "connection-string", 
                        "sas-token"
                    ]
                }, 
                "acquire": {
                    "$args": [
                        "container-name", 
                        "auth-mode", 
                        "lease-duration", 
                        "proposed-lease-id", 
                        "timeout", 
                        "if-modified-since", 
                        "if-unmodified-since", 
                        "account-key", 
                        "account-name", 
                        "connection-string", 
                        "sas-token"
                    ]
                }, 
                "change": {
                    "$args": [
                        "container-name", 
                        "lease-id", 
                        "proposed-lease-id", 
                        "auth-mode", 
                        "timeout", 
                        "if-modified-since", 
                        "if-unmodified-since", 
                        "account-key", 
                        "account-name", 
                        "connection-string", 
                        "sas-token"
                    ]
                }
            }, 
            "immutability-policy": {
                "lock": {
                    "$args": [
                        "account-name", 
                        "container-name", 
                        "resource-group", 
                        "if-match"
                    ]
                }, 
                "create": {
                    "$args": [
                        "account-name", 
                        "container-name", 
                        "period", 
                        "resource-group", 
                        "if-match"
                    ]
                }, 
                "show": {
                    "$args": [
                        "account-name", 
                        "container-name", 
                        "resource-group", 
                        "if-match"
                    ]
                }, 
                "extend": {
                    "$args": [
                        "account-name", 
                        "container-name", 
                        "period", 
                        "resource-group", 
                        "if-match"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "account-name", 
                        "container-name", 
                        "resource-group", 
                        "if-match"
                    ]
                }
            }, 
            "metadata": {
                "update": {
                    "$args": [
                        "name", 
                        "auth-mode", 
                        "lease-id", 
                        "metadata", 
                        "timeout", 
                        "if-modified-since", 
                        "account-key", 
                        "account-name", 
                        "connection-string", 
                        "sas-token"
                    ]
                }, 
                "show": {
                    "$args": [
                        "name", 
                        "auth-mode", 
                        "lease-id", 
                        "timeout", 
                        "account-key", 
                        "account-name", 
                        "connection-string", 
                        "sas-token"
                    ]
                }
            }
        }, 
        "share": {
            "stats": {
                "$args": [
                    "name", 
                    "timeout", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "exists": {
                "$args": [
                    "name", 
                    "snapshot", 
                    "timeout", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "show": {
                "$args": [
                    "name", 
                    "snapshot", 
                    "timeout", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "url": {
                "$args": [
                    "name", 
                    "protocol", 
                    "unc", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "create": {
                "$args": [
                    "name", 
                    "fail-on-exist", 
                    "metadata", 
                    "quota", 
                    "timeout", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "list": {
                "$args": [
                    "include-metadata", 
                    "include-snapshots", 
                    "num-results", 
                    "prefix", 
                    "timeout", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "update": {
                "$args": [
                    "name", 
                    "quota", 
                    "timeout", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "snapshot": {
                "$args": [
                    "name", 
                    "metadata", 
                    "quota", 
                    "timeout", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "generate-sas": {
                "$args": [
                    "name", 
                    "cache-control", 
                    "content-disposition", 
                    "content-encoding", 
                    "content-language", 
                    "content-type", 
                    "expiry", 
                    "https-only", 
                    "ip", 
                    "permissions", 
                    "policy-name", 
                    "start", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "policy": {
                "create": {
                    "$args": [
                        "name", 
                        "share-name", 
                        "expiry", 
                        "permissions", 
                        "start", 
                        "account-key", 
                        "account-name", 
                        "connection-string", 
                        "sas-token"
                    ]
                }, 
                "show": {
                    "$args": [
                        "name", 
                        "share-name", 
                        "account-key", 
                        "account-name", 
                        "connection-string", 
                        "sas-token"
                    ]
                }, 
                "list": {
                    "$args": [
                        "share-name", 
                        "account-key", 
                        "account-name", 
                        "connection-string", 
                        "sas-token"
                    ]
                }, 
                "update": {
                    "$args": [
                        "name", 
                        "share-name", 
                        "expiry", 
                        "permissions", 
                        "start", 
                        "account-key", 
                        "account-name", 
                        "connection-string", 
                        "sas-token"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "name", 
                        "share-name", 
                        "account-key", 
                        "account-name", 
                        "connection-string", 
                        "sas-token"
                    ]
                }
            }, 
            "metadata": {
                "update": {
                    "$args": [
                        "name", 
                        "metadata", 
                        "timeout", 
                        "account-key", 
                        "account-name", 
                        "connection-string", 
                        "sas-token"
                    ]
                }, 
                "show": {
                    "$args": [
                        "name", 
                        "snapshot", 
                        "timeout", 
                        "account-key", 
                        "account-name", 
                        "connection-string", 
                        "sas-token"
                    ]
                }
            }, 
            "delete": {
                "$args": [
                    "name", 
                    "delete-snapshots", 
                    "fail-not-exist", 
                    "snapshot", 
                    "timeout", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }
        }, 
        "entity": {
            "insert": {
                "$args": [
                    "entity", 
                    "table-name", 
                    "if-exists", 
                    "timeout", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "show": {
                "$args": [
                    "partition-key", 
                    "row-key", 
                    "table-name", 
                    "accept", 
                    "select", 
                    "timeout", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "replace": {
                "$args": [
                    "entity", 
                    "table-name", 
                    "timeout", 
                    "if-match", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "merge": {
                "$args": [
                    "entity", 
                    "table-name", 
                    "timeout", 
                    "if-match", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "query": {
                "$args": [
                    "table-name", 
                    "accept", 
                    "filter", 
                    "marker", 
                    "num-results", 
                    "select", 
                    "timeout", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "delete": {
                "$args": [
                    "partition-key", 
                    "row-key", 
                    "table-name", 
                    "timeout", 
                    "if-match", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }
        }, 
        "metrics": {
            "update": {
                "$args": [
                    "retention", 
                    "services", 
                    "api", 
                    "hour", 
                    "minute", 
                    "timeout", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "show": {
                "$args": [
                    "interval", 
                    "services", 
                    "timeout", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }
        }, 
        "blob": {
            "lease": {
                "break": {
                    "$args": [
                        "blob-name", 
                        "container-name", 
                        "auth-mode", 
                        "lease-break-period", 
                        "timeout", 
                        "if-match", 
                        "if-modified-since", 
                        "if-none-match", 
                        "if-unmodified-since", 
                        "account-key", 
                        "account-name", 
                        "connection-string", 
                        "sas-token"
                    ]
                }, 
                "release": {
                    "$args": [
                        "blob-name", 
                        "container-name", 
                        "lease-id", 
                        "auth-mode", 
                        "timeout", 
                        "if-match", 
                        "if-modified-since", 
                        "if-none-match", 
                        "if-unmodified-since", 
                        "account-key", 
                        "account-name", 
                        "connection-string", 
                        "sas-token"
                    ]
                }, 
                "renew": {
                    "$args": [
                        "blob-name", 
                        "container-name", 
                        "lease-id", 
                        "auth-mode", 
                        "timeout", 
                        "if-match", 
                        "if-modified-since", 
                        "if-none-match", 
                        "if-unmodified-since", 
                        "account-key", 
                        "account-name", 
                        "connection-string", 
                        "sas-token"
                    ]
                }, 
                "acquire": {
                    "$args": [
                        "blob-name", 
                        "container-name", 
                        "auth-mode", 
                        "lease-duration", 
                        "proposed-lease-id", 
                        "timeout", 
                        "if-match", 
                        "if-modified-since", 
                        "if-none-match", 
                        "if-unmodified-since", 
                        "account-key", 
                        "account-name", 
                        "connection-string", 
                        "sas-token"
                    ]
                }, 
                "change": {
                    "$args": [
                        "blob-name", 
                        "container-name", 
                        "lease-id", 
                        "proposed-lease-id", 
                        "auth-mode", 
                        "timeout", 
                        "if-match", 
                        "if-modified-since", 
                        "if-none-match", 
                        "if-unmodified-since", 
                        "account-key", 
                        "account-name", 
                        "connection-string", 
                        "sas-token"
                    ]
                }
            }, 
            "exists": {
                "$args": [
                    "container-name", 
                    "name", 
                    "auth-mode", 
                    "snapshot", 
                    "timeout", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "delete-batch": {
                "$args": [
                    "source", 
                    "auth-mode", 
                    "delete-snapshots", 
                    "dryrun", 
                    "lease-id", 
                    "pattern", 
                    "timeout", 
                    "if-match", 
                    "if-modified-since", 
                    "if-none-match", 
                    "if-unmodified-since", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "show": {
                "$args": [
                    "container-name", 
                    "name", 
                    "auth-mode", 
                    "lease-id", 
                    "snapshot", 
                    "timeout", 
                    "if-match", 
                    "if-modified-since", 
                    "if-none-match", 
                    "if-unmodified-since", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "undelete": {
                "$args": [
                    "container-name", 
                    "name", 
                    "auth-mode", 
                    "timeout", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "update": {
                "$args": [
                    "container-name", 
                    "name", 
                    "auth-mode", 
                    "content-cache-control", 
                    "content-disposition", 
                    "content-encoding", 
                    "content-language", 
                    "content-md5", 
                    "content-type", 
                    "lease-id", 
                    "timeout", 
                    "if-match", 
                    "if-modified-since", 
                    "if-none-match", 
                    "if-unmodified-since", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "list": {
                "$args": [
                    "container-name", 
                    "auth-mode", 
                    "delimiter", 
                    "include", 
                    "num-results", 
                    "prefix", 
                    "timeout", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "metadata": {
                "update": {
                    "$args": [
                        "container-name", 
                        "name", 
                        "auth-mode", 
                        "lease-id", 
                        "metadata", 
                        "timeout", 
                        "if-match", 
                        "if-modified-since", 
                        "if-none-match", 
                        "if-unmodified-since", 
                        "account-key", 
                        "account-name", 
                        "connection-string", 
                        "sas-token"
                    ]
                }, 
                "show": {
                    "$args": [
                        "container-name", 
                        "name", 
                        "auth-mode", 
                        "lease-id", 
                        "snapshot", 
                        "timeout", 
                        "if-match", 
                        "if-modified-since", 
                        "if-none-match", 
                        "if-unmodified-since", 
                        "account-key", 
                        "account-name", 
                        "connection-string", 
                        "sas-token"
                    ]
                }
            }, 
            "service-properties": {
                "delete-policy": {
                    "update": {
                        "$args": [
                            "auth-mode", 
                            "days-retained", 
                            "enable", 
                            "account-key", 
                            "account-name", 
                            "connection-string", 
                            "sas-token"
                        ]
                    }, 
                    "show": {
                        "$args": [
                            "auth-mode", 
                            "timeout", 
                            "account-key", 
                            "account-name", 
                            "connection-string", 
                            "sas-token"
                        ]
                    }
                }, 
                "show": {
                    "$args": [
                        "auth-mode", 
                        "timeout", 
                        "account-key", 
                        "account-name", 
                        "connection-string", 
                        "sas-token"
                    ]
                }
            }, 
            "upload-batch": {
                "$args": [
                    "destination", 
                    "source", 
                    "auth-mode", 
                    "destination-path", 
                    "dryrun", 
                    "lease-id", 
                    "max-connections", 
                    "metadata", 
                    "no-progress", 
                    "pattern", 
                    "socket-timeout", 
                    "timeout", 
                    "type", 
                    "content-cache-control", 
                    "content-disposition", 
                    "content-encoding", 
                    "content-language", 
                    "content-md5", 
                    "content-type", 
                    "maxsize-condition", 
                    "validate-content", 
                    "if-match", 
                    "if-modified-since", 
                    "if-none-match", 
                    "if-unmodified-since", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "url": {
                "$args": [
                    "container-name", 
                    "name", 
                    "auth-mode", 
                    "protocol", 
                    "snapshot", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "snapshot": {
                "$args": [
                    "container-name", 
                    "name", 
                    "auth-mode", 
                    "lease-id", 
                    "metadata", 
                    "timeout", 
                    "if-match", 
                    "if-modified-since", 
                    "if-none-match", 
                    "if-unmodified-since", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "generate-sas": {
                "$args": [
                    "container-name", 
                    "name", 
                    "auth-mode", 
                    "cache-control", 
                    "content-disposition", 
                    "content-encoding", 
                    "content-language", 
                    "content-type", 
                    "expiry", 
                    "https-only", 
                    "ip", 
                    "permissions", 
                    "policy-name", 
                    "start", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "set-tier": {
                "$args": [
                    "container-name", 
                    "name", 
                    "tier", 
                    "auth-mode", 
                    "timeout", 
                    "type", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "download": {
                "$args": [
                    "container-name", 
                    "file", 
                    "name", 
                    "auth-mode", 
                    "end-range", 
                    "lease-id", 
                    "max-connections", 
                    "no-progress", 
                    "open-mode", 
                    "snapshot", 
                    "socket-timeout", 
                    "start-range", 
                    "timeout", 
                    "validate-content", 
                    "if-match", 
                    "if-modified-since", 
                    "if-none-match", 
                    "if-unmodified-since", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "incremental-copy": {
                "cancel": {
                    "$args": [
                        "container-name", 
                        "copy-id", 
                        "name", 
                        "auth-mode", 
                        "lease-id", 
                        "timeout", 
                        "account-key", 
                        "account-name", 
                        "connection-string", 
                        "sas-token"
                    ]
                }, 
                "start": {
                    "$args": [
                        "destination-blob", 
                        "destination-container", 
                        "auth-mode", 
                        "destination-lease-id", 
                        "metadata", 
                        "timeout", 
                        "source-account-key", 
                        "source-account-name", 
                        "source-blob", 
                        "source-container", 
                        "source-lease-id", 
                        "source-sas", 
                        "source-snapshot", 
                        "source-uri", 
                        "destination-if-match", 
                        "destination-if-modified-since", 
                        "destination-if-none-match", 
                        "destination-if-unmodified-since", 
                        "account-key", 
                        "account-name", 
                        "connection-string", 
                        "sas-token"
                    ]
                }
            }, 
            "copy": {
                "cancel": {
                    "$args": [
                        "copy-id", 
                        "destination-blob", 
                        "destination-container", 
                        "auth-mode", 
                        "lease-id", 
                        "timeout", 
                        "account-key", 
                        "account-name", 
                        "connection-string", 
                        "sas-token"
                    ]
                }, 
                "start": {
                    "$args": [
                        "destination-blob", 
                        "destination-container", 
                        "auth-mode", 
                        "destination-lease-id", 
                        "metadata", 
                        "timeout", 
                        "source-account-key", 
                        "source-account-name", 
                        "source-blob", 
                        "source-container", 
                        "source-lease-id", 
                        "source-path", 
                        "source-sas", 
                        "source-share", 
                        "source-snapshot", 
                        "source-uri", 
                        "destination-if-match", 
                        "destination-if-modified-since", 
                        "destination-if-none-match", 
                        "destination-if-unmodified-since", 
                        "source-if-match", 
                        "source-if-modified-since", 
                        "source-if-none-match", 
                        "source-if-unmodified-since", 
                        "account-key", 
                        "account-name", 
                        "connection-string", 
                        "sas-token"
                    ]
                }, 
                "start-batch": {
                    "$args": [
                        "auth-mode", 
                        "destination-container", 
                        "destination-path", 
                        "dryrun", 
                        "pattern", 
                        "source-account-key", 
                        "source-account-name", 
                        "source-container", 
                        "source-sas", 
                        "source-share", 
                        "source-uri", 
                        "account-key", 
                        "account-name", 
                        "connection-string", 
                        "sas-token"
                    ]
                }
            }, 
            "download-batch": {
                "$args": [
                    "destination", 
                    "source", 
                    "auth-mode", 
                    "dryrun", 
                    "max-connections", 
                    "no-progress", 
                    "pattern", 
                    "socket-timeout", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "upload": {
                "$args": [
                    "container-name", 
                    "file", 
                    "name", 
                    "auth-mode", 
                    "content-cache-control", 
                    "content-disposition", 
                    "content-encoding", 
                    "content-language", 
                    "content-md5", 
                    "content-type", 
                    "lease-id", 
                    "max-connections", 
                    "maxsize-condition", 
                    "metadata", 
                    "no-progress", 
                    "socket-timeout", 
                    "tier", 
                    "timeout", 
                    "type", 
                    "validate-content", 
                    "if-match", 
                    "if-modified-since", 
                    "if-none-match", 
                    "if-unmodified-since", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "delete": {
                "$args": [
                    "container-name", 
                    "name", 
                    "auth-mode", 
                    "delete-snapshots", 
                    "lease-id", 
                    "snapshot", 
                    "timeout", 
                    "if-match", 
                    "if-modified-since", 
                    "if-none-match", 
                    "if-unmodified-since", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }
        }, 
        "file": {
            "exists": {
                "$args": [
                    "path", 
                    "share-name", 
                    "snapshot", 
                    "timeout", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "delete-batch": {
                "$args": [
                    "source", 
                    "dryrun", 
                    "pattern", 
                    "timeout", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "show": {
                "$args": [
                    "path", 
                    "share-name", 
                    "snapshot", 
                    "timeout", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "upload-batch": {
                "$args": [
                    "destination", 
                    "source", 
                    "destination-path", 
                    "dryrun", 
                    "metadata", 
                    "no-progress", 
                    "pattern", 
                    "validate-content", 
                    "content-cache-control", 
                    "content-disposition", 
                    "content-encoding", 
                    "content-language", 
                    "content-md5", 
                    "content-type", 
                    "max-connections", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "list": {
                "$args": [
                    "share-name", 
                    "exclude-dir", 
                    "path", 
                    "snapshot", 
                    "timeout", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "metadata": {
                "update": {
                    "$args": [
                        "path", 
                        "share-name", 
                        "metadata", 
                        "timeout", 
                        "account-key", 
                        "account-name", 
                        "connection-string", 
                        "sas-token"
                    ]
                }, 
                "show": {
                    "$args": [
                        "path", 
                        "share-name", 
                        "snapshot", 
                        "timeout", 
                        "account-key", 
                        "account-name", 
                        "connection-string", 
                        "sas-token"
                    ]
                }
            }, 
            "update": {
                "$args": [
                    "path", 
                    "share-name", 
                    "content-cache-control", 
                    "content-disposition", 
                    "content-encoding", 
                    "content-language", 
                    "content-md5", 
                    "content-type", 
                    "timeout", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "url": {
                "$args": [
                    "path", 
                    "share-name", 
                    "protocol", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "upload": {
                "$args": [
                    "share-name", 
                    "source", 
                    "content-cache-control", 
                    "content-disposition", 
                    "content-encoding", 
                    "content-language", 
                    "content-md5", 
                    "content-type", 
                    "max-connections", 
                    "metadata", 
                    "no-progress", 
                    "path", 
                    "timeout", 
                    "validate-content", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "generate-sas": {
                "$args": [
                    "path", 
                    "share-name", 
                    "cache-control", 
                    "content-disposition", 
                    "content-encoding", 
                    "content-language", 
                    "content-type", 
                    "expiry", 
                    "https-only", 
                    "ip", 
                    "permissions", 
                    "policy-name", 
                    "start", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "download": {
                "$args": [
                    "path", 
                    "share-name", 
                    "dest", 
                    "end-range", 
                    "max-connections", 
                    "no-progress", 
                    "open-mode", 
                    "snapshot", 
                    "start-range", 
                    "timeout", 
                    "validate-content", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "copy": {
                "cancel": {
                    "$args": [
                        "copy-id", 
                        "destination-path", 
                        "destination-share", 
                        "timeout", 
                        "account-key", 
                        "account-name", 
                        "connection-string", 
                        "sas-token"
                    ]
                }, 
                "start": {
                    "$args": [
                        "destination-path", 
                        "destination-share", 
                        "metadata", 
                        "timeout", 
                        "source-account-key", 
                        "source-account-name", 
                        "source-blob", 
                        "source-container", 
                        "source-path", 
                        "source-sas", 
                        "source-share", 
                        "source-snapshot", 
                        "source-uri", 
                        "account-key", 
                        "account-name", 
                        "connection-string", 
                        "sas-token"
                    ]
                }, 
                "start-batch": {
                    "$args": [
                        "destination-path", 
                        "destination-share", 
                        "dryrun", 
                        "metadata", 
                        "pattern", 
                        "timeout", 
                        "source-account-key", 
                        "source-account-name", 
                        "source-container", 
                        "source-sas", 
                        "source-share", 
                        "source-uri", 
                        "account-key", 
                        "account-name", 
                        "connection-string", 
                        "sas-token"
                    ]
                }
            }, 
            "download-batch": {
                "$args": [
                    "destination", 
                    "source", 
                    "dryrun", 
                    "no-progress", 
                    "pattern", 
                    "validate-content", 
                    "max-connections", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "resize": {
                "$args": [
                    "path", 
                    "share-name", 
                    "size", 
                    "timeout", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "delete": {
                "$args": [
                    "path", 
                    "share-name", 
                    "timeout", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }
        }, 
        "cors": {
            "add": {
                "$args": [
                    "methods", 
                    "origins", 
                    "services", 
                    "allowed-headers", 
                    "exposed-headers", 
                    "max-age", 
                    "timeout", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "list": {
                "$args": [
                    "services", 
                    "timeout", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "clear": {
                "$args": [
                    "services", 
                    "timeout", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }
        }, 
        "directory": {
            "exists": {
                "$args": [
                    "name", 
                    "share-name", 
                    "snapshot", 
                    "timeout", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "show": {
                "$args": [
                    "name", 
                    "share-name", 
                    "snapshot", 
                    "timeout", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "create": {
                "$args": [
                    "name", 
                    "share-name", 
                    "fail-on-exist", 
                    "metadata", 
                    "timeout", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "list": {
                "$args": [
                    "share-name", 
                    "name", 
                    "timeout", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "metadata": {
                "update": {
                    "$args": [
                        "name", 
                        "share-name", 
                        "metadata", 
                        "timeout", 
                        "account-key", 
                        "account-name", 
                        "connection-string", 
                        "sas-token"
                    ]
                }, 
                "show": {
                    "$args": [
                        "name", 
                        "share-name", 
                        "snapshot", 
                        "timeout", 
                        "account-key", 
                        "account-name", 
                        "connection-string", 
                        "sas-token"
                    ]
                }
            }, 
            "delete": {
                "$args": [
                    "name", 
                    "share-name", 
                    "fail-not-exist", 
                    "timeout", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }
        }, 
        "logging": {
            "update": {
                "$args": [
                    "log", 
                    "retention", 
                    "services", 
                    "timeout", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "show": {
                "$args": [
                    "services", 
                    "timeout", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }
        }, 
        "message": {
            "peek": {
                "$args": [
                    "queue-name", 
                    "auth-mode", 
                    "num-messages", 
                    "timeout", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "get": {
                "$args": [
                    "queue-name", 
                    "auth-mode", 
                    "num-messages", 
                    "timeout", 
                    "visibility-timeout", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "clear": {
                "$args": [
                    "queue-name", 
                    "auth-mode", 
                    "timeout", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "update": {
                "$args": [
                    "id", 
                    "pop-receipt", 
                    "queue-name", 
                    "visibility-timeout", 
                    "auth-mode", 
                    "content", 
                    "timeout", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "put": {
                "$args": [
                    "content", 
                    "queue-name", 
                    "auth-mode", 
                    "time-to-live", 
                    "timeout", 
                    "visibility-timeout", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "delete": {
                "$args": [
                    "id", 
                    "pop-receipt", 
                    "queue-name", 
                    "auth-mode", 
                    "timeout", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }
        }, 
        "table": {
            "stats": {
                "$args": [
                    "timeout", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "exists": {
                "$args": [
                    "name", 
                    "timeout", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "create": {
                "$args": [
                    "name", 
                    "fail-on-exist", 
                    "timeout", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "list": {
                "$args": [
                    "marker", 
                    "num-results", 
                    "timeout", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "generate-sas": {
                "$args": [
                    "name", 
                    "end-pk", 
                    "end-rk", 
                    "expiry", 
                    "https-only", 
                    "ip", 
                    "permissions", 
                    "policy-name", 
                    "start", 
                    "start-pk", 
                    "start-rk", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }, 
            "policy": {
                "create": {
                    "$args": [
                        "name", 
                        "table-name", 
                        "expiry", 
                        "permissions", 
                        "start", 
                        "account-key", 
                        "account-name", 
                        "connection-string", 
                        "sas-token"
                    ]
                }, 
                "show": {
                    "$args": [
                        "name", 
                        "table-name", 
                        "account-key", 
                        "account-name", 
                        "connection-string", 
                        "sas-token"
                    ]
                }, 
                "list": {
                    "$args": [
                        "table-name", 
                        "account-key", 
                        "account-name", 
                        "connection-string", 
                        "sas-token"
                    ]
                }, 
                "update": {
                    "$args": [
                        "name", 
                        "table-name", 
                        "expiry", 
                        "permissions", 
                        "start", 
                        "account-key", 
                        "account-name", 
                        "connection-string", 
                        "sas-token"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "name", 
                        "table-name", 
                        "account-key", 
                        "account-name", 
                        "connection-string", 
                        "sas-token"
                    ]
                }
            }, 
            "delete": {
                "$args": [
                    "name", 
                    "fail-not-exist", 
                    "timeout", 
                    "account-key", 
                    "account-name", 
                    "connection-string", 
                    "sas-token"
                ]
            }
        }
    }, 
    "redis": {
        "regenerate-keys": {
            "$args": [
                "key-type", 
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "show": {
            "$args": [
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "list-keys": {
            "$args": [
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "create": {
            "$args": [
                "location", 
                "name", 
                "resource-group", 
                "sku", 
                "vm-size", 
                "enable-non-ssl-port", 
                "redis-configuration", 
                "shard-count", 
                "static-ip", 
                "subnet-id", 
                "tags", 
                "tenant-settings"
            ]
        }, 
        "list": {
            "$args": [
                "resource-group"
            ]
        }, 
        "update": {
            "$args": [
                "sku", 
                "vm-size", 
                "add", 
                "force-string", 
                "remove", 
                "set", 
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "export": {
            "$args": [
                "container", 
                "prefix", 
                "file-format", 
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "force-reboot": {
            "$args": [
                "reboot-type", 
                "shard-id", 
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "patch-schedule": {
            "show": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "set": {
                "$args": [
                    "schedule-entries", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "delete": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "import": {
            "$args": [
                "file-format", 
                "files", 
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "delete": {
            "$args": [
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }
    }, 
    "feature": {
        "register": {
            "$args": [
                "name", 
                "namespace"
            ]
        }, 
        "list": {
            "$args": [
                "namespace"
            ]
        }, 
        "show": {
            "$args": [
                "name", 
                "namespace"
            ]
        }
    }, 
    "find": {
        "$args": [
            "search-query", 
            "reindex"
        ]
    }, 
    "dls": {
        "account": {
            "show": {
                "$args": [
                    "resource-group", 
                    "account", 
                    "ids", 
                    "subscription"
                ]
            }, 
            "firewall": {
                "create": {
                    "$args": [
                        "account", 
                        "end-ip-address", 
                        "firewall-rule-name", 
                        "start-ip-address", 
                        "resource-group"
                    ]
                }, 
                "show": {
                    "$args": [
                        "firewall-rule-name", 
                        "resource-group", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }, 
                "list": {
                    "$args": [
                        "resource-group", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }, 
                "update": {
                    "$args": [
                        "firewall-rule-name", 
                        "end-ip-address", 
                        "resource-group", 
                        "start-ip-address", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "firewall-rule-name", 
                        "resource-group", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }
            }, 
            "create": {
                "$args": [
                    "account", 
                    "default-group", 
                    "disable-encryption", 
                    "encryption-type", 
                    "key-name", 
                    "key-vault-id", 
                    "key-version", 
                    "location", 
                    "resource-group", 
                    "tags", 
                    "tier"
                ]
            }, 
            "list": {
                "$args": [
                    "resource-group"
                ]
            }, 
            "update": {
                "$args": [
                    "allow-azure-ips", 
                    "firewall-state", 
                    "resource-group", 
                    "tags", 
                    "tier", 
                    "trusted-id-provider-state", 
                    "account", 
                    "ids", 
                    "subscription"
                ]
            }, 
            "network-rule": {
                "create": {
                    "$args": [
                        "account-name", 
                        "name", 
                        "subnet", 
                        "resource-group", 
                        "vnet-name"
                    ]
                }, 
                "show": {
                    "$args": [
                        "account-name", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "list": {
                    "$args": [
                        "account-name", 
                        "resource-group"
                    ]
                }, 
                "update": {
                    "$args": [
                        "account-name", 
                        "subnet", 
                        "vnet-name", 
                        "add", 
                        "force-string", 
                        "remove", 
                        "set", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "account-name", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }
            }, 
            "trusted-provider": {
                "create": {
                    "$args": [
                        "account", 
                        "id-provider", 
                        "trusted-id-provider-name", 
                        "resource-group"
                    ]
                }, 
                "show": {
                    "$args": [
                        "trusted-id-provider-name", 
                        "resource-group", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }, 
                "list": {
                    "$args": [
                        "resource-group", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }, 
                "update": {
                    "$args": [
                        "trusted-id-provider-name", 
                        "id-provider", 
                        "resource-group", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "trusted-id-provider-name", 
                        "resource-group", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }
            }, 
            "enable-key-vault": {
                "$args": [
                    "resource-group", 
                    "account", 
                    "ids", 
                    "subscription"
                ]
            }, 
            "delete": {
                "$args": [
                    "resource-group", 
                    "account", 
                    "ids", 
                    "subscription"
                ]
            }
        }, 
        "fs": {
            "join": {
                "$args": [
                    "destination-path", 
                    "source-paths", 
                    "force", 
                    "account", 
                    "ids", 
                    "subscription"
                ]
            }, 
            "show": {
                "$args": [
                    "path", 
                    "account", 
                    "ids", 
                    "subscription"
                ]
            }, 
            "create": {
                "$args": [
                    "account", 
                    "path", 
                    "content", 
                    "folder", 
                    "force"
                ]
            }, 
            "move": {
                "$args": [
                    "destination-path", 
                    "source-path", 
                    "force", 
                    "account", 
                    "ids", 
                    "subscription"
                ]
            }, 
            "list": {
                "$args": [
                    "path", 
                    "account", 
                    "ids", 
                    "subscription"
                ]
            }, 
            "upload": {
                "$args": [
                    "destination-path", 
                    "source-path", 
                    "block-size", 
                    "buffer-size", 
                    "chunk-size", 
                    "overwrite", 
                    "thread-count", 
                    "account", 
                    "ids", 
                    "subscription"
                ]
            }, 
            "access": {
                "set": {
                    "$args": [
                        "acl-spec", 
                        "path", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }, 
                "remove-all": {
                    "$args": [
                        "path", 
                        "default-acl", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }, 
                "set-permission": {
                    "$args": [
                        "path", 
                        "permission", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }, 
                "show": {
                    "$args": [
                        "path", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }, 
                "set-entry": {
                    "$args": [
                        "acl-spec", 
                        "path", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }, 
                "remove-entry": {
                    "$args": [
                        "acl-spec", 
                        "path", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }, 
                "set-owner": {
                    "$args": [
                        "path", 
                        "group", 
                        "owner", 
                        "account", 
                        "ids", 
                        "subscription"
                    ]
                }
            }, 
            "test": {
                "$args": [
                    "path", 
                    "account", 
                    "ids", 
                    "subscription"
                ]
            }, 
            "set-expiry": {
                "$args": [
                    "expiration-time", 
                    "path", 
                    "account", 
                    "ids", 
                    "subscription"
                ]
            }, 
            "download": {
                "$args": [
                    "destination-path", 
                    "source-path", 
                    "block-size", 
                    "buffer-size", 
                    "chunk-size", 
                    "overwrite", 
                    "thread-count", 
                    "account", 
                    "ids", 
                    "subscription"
                ]
            }, 
            "remove-expiry": {
                "$args": [
                    "path", 
                    "account", 
                    "ids", 
                    "subscription"
                ]
            }, 
            "preview": {
                "$args": [
                    "path", 
                    "force", 
                    "length", 
                    "offset", 
                    "account", 
                    "ids", 
                    "subscription"
                ]
            }, 
            "append": {
                "$args": [
                    "content", 
                    "path", 
                    "account", 
                    "ids", 
                    "subscription"
                ]
            }, 
            "delete": {
                "$args": [
                    "path", 
                    "recurse", 
                    "account", 
                    "ids", 
                    "subscription"
                ]
            }
        }
    }, 
    "hdinsight": {
        "show": {
            "$args": [
                "name", 
                "resource-group"
            ]
        }, 
        "create": {
            "$args": [
                "name", 
                "resource-group", 
                "location", 
                "no-wait", 
                "tags", 
                "cluster-configurations", 
                "cluster-tier", 
                "component-version", 
                "size", 
                "type", 
                "version", 
                "http-password", 
                "http-user", 
                "subnet-name", 
                "virtual-network", 
                "edgenode-size", 
                "headnode-size", 
                "workernode-data-disk-size", 
                "workernode-data-disk-storage-account-type", 
                "workernode-data-disks-per-node", 
                "workernode-size", 
                "zookeepernode-size", 
                "ssh-password", 
                "ssh-public-key", 
                "ssh-user", 
                "storage-account", 
                "storage-account-key", 
                "storage-default-container", 
                "storage-default-filesystem"
            ]
        }, 
        "list": {
            "$args": [
                "resource-group"
            ]
        }, 
        "delete": {
            "$args": [
                "name", 
                "resource-group", 
                "no-wait", 
                "yes"
            ]
        }, 
        "resize": {
            "$args": [
                "name", 
                "resource-group", 
                "no-wait", 
                "target-instance-count"
            ]
        }, 
        "wait": {
            "$args": [
                "name", 
                "resource-group", 
                "created", 
                "custom", 
                "deleted", 
                "exists", 
                "interval", 
                "timeout", 
                "updated"
            ]
        }
    }, 
    "role": {
        "assignment": {
            "create": {
                "$args": [
                    "role", 
                    "assignee", 
                    "assignee-object-id", 
                    "resource-group", 
                    "scope"
                ]
            }, 
            "list-changelogs": {
                "$args": [
                    "end-time", 
                    "start-time"
                ]
            }, 
            "list": {
                "$args": [
                    "all", 
                    "assignee", 
                    "include-classic-administrators", 
                    "include-groups", 
                    "include-inherited", 
                    "resource-group", 
                    "role", 
                    "scope"
                ]
            }, 
            "delete": {
                "$args": [
                    "assignee", 
                    "ids", 
                    "include-inherited", 
                    "resource-group", 
                    "role", 
                    "scope"
                ]
            }
        }, 
        "definition": {
            "create": {
                "$args": [
                    "role-definition"
                ]
            }, 
            "list": {
                "$args": [
                    "custom-role-only", 
                    "name", 
                    "resource-group", 
                    "scope"
                ]
            }, 
            "update": {
                "$args": [
                    "role-definition"
                ]
            }, 
            "delete": {
                "$args": [
                    "name", 
                    "custom-role-only", 
                    "resource-group", 
                    "scope"
                ]
            }
        }
    }, 
    "webapp": {
        "log": {
            "download": {
                "$args": [
                    "log-file", 
                    "slot", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "tail": {
                "$args": [
                    "provider", 
                    "slot", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "config": {
                "$args": [
                    "application-logging", 
                    "detailed-error-messages", 
                    "docker-container-logging", 
                    "failed-request-tracing", 
                    "level", 
                    "slot", 
                    "web-server-logging", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "show": {
                "$args": [
                    "slot", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "show": {
            "$args": [
                "slot", 
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "deleted": {
            "restore": {
                "$args": [
                    "deleted-id", 
                    "restore-content-only", 
                    "slot", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "list": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "slot"
                ]
            }
        }, 
        "stop": {
            "$args": [
                "slot", 
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "create": {
            "$args": [
                "name", 
                "plan", 
                "resource-group", 
                "deployment-container-image-name", 
                "deployment-local-git", 
                "deployment-source-branch", 
                "deployment-source-url", 
                "multicontainer-config-file", 
                "multicontainer-config-type", 
                "runtime", 
                "startup-file", 
                "tags"
            ]
        }, 
        "cors": {
            "add": {
                "$args": [
                    "allowed-origins", 
                    "slot", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "remove": {
                "$args": [
                    "allowed-origins", 
                    "slot", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "show": {
                "$args": [
                    "slot", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "list": {
            "$args": [
                "resource-group"
            ]
        }, 
        "update": {
            "$args": [
                "client-affinity-enabled", 
                "force-dns-registration", 
                "https-only", 
                "skip-custom-domain-verification", 
                "skip-dns-registration", 
                "slot", 
                "ttl-in-seconds", 
                "add", 
                "force-string", 
                "remove", 
                "set", 
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "auth": {
            "update": {
                "$args": [
                    "action", 
                    "allowed-external-redirect-urls", 
                    "enabled", 
                    "slot", 
                    "token-refresh-extension-hours", 
                    "token-store", 
                    "aad-allowed-token-audiences", 
                    "aad-client-id", 
                    "aad-client-secret", 
                    "aad-token-issuer-url", 
                    "facebook-app-id", 
                    "facebook-app-secret", 
                    "facebook-oauth-scopes", 
                    "google-client-id", 
                    "google-client-secret", 
                    "google-oauth-scopes", 
                    "microsoft-account-client-id", 
                    "microsoft-account-client-secret", 
                    "microsoft-account-oauth-scopes", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription", 
                    "twitter-consumer-key", 
                    "twitter-consumer-secret"
                ]
            }, 
            "show": {
                "$args": [
                    "slot", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "browse": {
            "$args": [
                "logs", 
                "slot", 
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "restart": {
            "$args": [
                "slot", 
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "deployment": {
            "slot": {
                "auto-swap": {
                    "$args": [
                        "slot", 
                        "auto-swap-slot", 
                        "disable", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "swap": {
                    "$args": [
                        "slot", 
                        "action", 
                        "target-slot", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "list": {
                    "$args": [
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "create": {
                    "$args": [
                        "name", 
                        "resource-group", 
                        "slot", 
                        "configuration-source"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "slot", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }
            }, 
            "source": {
                "show": {
                    "$args": [
                        "slot", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "config-zip": {
                    "$args": [
                        "src", 
                        "slot", 
                        "timeout", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "sync": {
                    "$args": [
                        "slot", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "update-token": {
                    "$args": [
                        "git-token"
                    ]
                }, 
                "config-local-git": {
                    "$args": [
                        "slot", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "config": {
                    "$args": [
                        "repo-url", 
                        "branch", 
                        "git-token", 
                        "manual-integration", 
                        "repository-type", 
                        "slot", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription", 
                        "app-working-dir", 
                        "cd-account-create", 
                        "cd-app-type", 
                        "cd-project-url", 
                        "nodejs-task-runner", 
                        "private-repo-password", 
                        "private-repo-username", 
                        "python-framework", 
                        "python-version", 
                        "slot-swap", 
                        "test"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "slot", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }
            }, 
            "container": {
                "show-cd-url": {
                    "$args": [
                        "slot", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "config": {
                    "$args": [
                        "enable-cd", 
                        "slot", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }
            }, 
            "user": {
                "set": {
                    "$args": [
                        "user-name", 
                        "password"
                    ]
                }, 
                "show": {
                    
                }
            }, 
            "list-publishing-profiles": {
                "$args": [
                    "slot", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "list-runtimes": {
            "$args": [
                "linux"
            ]
        }, 
        "traffic-routing": {
            "clear": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "set": {
                "$args": [
                    "distribution", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "show": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "delete": {
            "$args": [
                "keep-dns-registration", 
                "keep-empty-plan", 
                "keep-metrics", 
                "slot", 
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "config": {
            "set": {
                "$args": [
                    "always-on", 
                    "auto-heal-enabled", 
                    "ftps-state", 
                    "http20-enabled", 
                    "java-container", 
                    "java-container-version", 
                    "java-version", 
                    "linux-fx-version", 
                    "min-tls-version", 
                    "net-framework-version", 
                    "php-version", 
                    "python-version", 
                    "remote-debugging-enabled", 
                    "slot", 
                    "startup-file", 
                    "use-32bit-worker-process", 
                    "web-sockets-enabled", 
                    "windows-fx-version", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "container": {
                "show": {
                    "$args": [
                        "show-multicontainer-config", 
                        "slot", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "set": {
                    "$args": [
                        "docker-custom-image-name", 
                        "docker-registry-server-password", 
                        "docker-registry-server-url", 
                        "docker-registry-server-user", 
                        "enable-app-service-storage", 
                        "multicontainer-config-file", 
                        "multicontainer-config-type", 
                        "slot", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "slot", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }
            }, 
            "storage-account": {
                "add": {
                    "$args": [
                        "access-key", 
                        "account-name", 
                        "custom-id", 
                        "share-name", 
                        "storage-type", 
                        "mount-path", 
                        "slot", 
                        "slot-setting", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "list": {
                    "$args": [
                        "name", 
                        "resource-group", 
                        "slot"
                    ]
                }, 
                "update": {
                    "$args": [
                        "custom-id", 
                        "access-key", 
                        "account-name", 
                        "mount-path", 
                        "share-name", 
                        "slot", 
                        "slot-setting", 
                        "storage-type", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "custom-id", 
                        "slot", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }
            }, 
            "show": {
                "$args": [
                    "slot", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "appsettings": {
                "set": {
                    "$args": [
                        "settings", 
                        "slot", 
                        "slot-settings", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "list": {
                    "$args": [
                        "name", 
                        "resource-group", 
                        "slot"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "setting-names", 
                        "slot", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }
            }, 
            "hostname": {
                "add": {
                    "$args": [
                        "slot", 
                        "hostname", 
                        "ids", 
                        "resource-group", 
                        "subscription", 
                        "webapp-name"
                    ]
                }, 
                "list": {
                    "$args": [
                        "resource-group", 
                        "webapp-name", 
                        "slot"
                    ]
                }, 
                "get-external-ip": {
                    "$args": [
                        "ids", 
                        "resource-group", 
                        "subscription", 
                        "webapp-name"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "slot", 
                        "hostname", 
                        "ids", 
                        "resource-group", 
                        "subscription", 
                        "webapp-name"
                    ]
                }
            }, 
            "connection-string": {
                "set": {
                    "$args": [
                        "connection-string-type", 
                        "settings", 
                        "slot", 
                        "slot-settings", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "list": {
                    "$args": [
                        "name", 
                        "resource-group", 
                        "slot"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "setting-names", 
                        "slot", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }
            }, 
            "ssl": {
                "bind": {
                    "$args": [
                        "certificate-thumbprint", 
                        "ssl-type", 
                        "slot", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "unbind": {
                    "$args": [
                        "certificate-thumbprint", 
                        "slot", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "list": {
                    "$args": [
                        "resource-group"
                    ]
                }, 
                "upload": {
                    "$args": [
                        "certificate-file", 
                        "certificate-password", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "certificate-thumbprint", 
                        "resource-group"
                    ]
                }
            }, 
            "backup": {
                "restore": {
                    "$args": [
                        "backup-name", 
                        "container-url", 
                        "resource-group", 
                        "webapp-name", 
                        "ignore-hostname-conflict", 
                        "overwrite", 
                        "slot", 
                        "target-name", 
                        "db-connection-string", 
                        "db-name", 
                        "db-type"
                    ]
                }, 
                "create": {
                    "$args": [
                        "container-url", 
                        "resource-group", 
                        "webapp-name", 
                        "backup-name", 
                        "slot", 
                        "db-connection-string", 
                        "db-name", 
                        "db-type"
                    ]
                }, 
                "list": {
                    "$args": [
                        "resource-group", 
                        "webapp-name", 
                        "slot"
                    ]
                }, 
                "update": {
                    "$args": [
                        "resource-group", 
                        "webapp-name", 
                        "backup-name", 
                        "container-url", 
                        "frequency", 
                        "retain-one", 
                        "retention", 
                        "slot", 
                        "db-connection-string", 
                        "db-name", 
                        "db-type"
                    ]
                }, 
                "show": {
                    "$args": [
                        "resource-group", 
                        "webapp-name", 
                        "slot"
                    ]
                }
            }
        }, 
        "start": {
            "$args": [
                "slot", 
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "identity": {
            "assign": {
                "$args": [
                    "role", 
                    "scope", 
                    "slot", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "remove": {
                "$args": [
                    "slot", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "show": {
                "$args": [
                    "slot", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "webjob": {
            "continuous": {
                "stop": {
                    "$args": [
                        "webjob-name", 
                        "slot", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "start": {
                    "$args": [
                        "webjob-name", 
                        "slot", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "list": {
                    "$args": [
                        "name", 
                        "resource-group", 
                        "slot"
                    ]
                }, 
                "remove": {
                    "$args": [
                        "webjob-name", 
                        "slot", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }
            }, 
            "triggered": {
                "run": {
                    "$args": [
                        "webjob-name", 
                        "slot", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "list": {
                    "$args": [
                        "name", 
                        "resource-group", 
                        "slot"
                    ]
                }, 
                "log": {
                    "$args": [
                        "webjob-name", 
                        "slot", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "remove": {
                    "$args": [
                        "webjob-name", 
                        "slot", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }
            }
        }
    }, 
    "provider": {
        "unregister": {
            "$args": [
                "namespace", 
                "wait"
            ]
        }, 
        "operation": {
            "list": {
                
            }, 
            "show": {
                "$args": [
                    "namespace"
                ]
            }
        }, 
        "register": {
            "$args": [
                "namespace", 
                "wait"
            ]
        }, 
        "list": {
            "$args": [
                "expand"
            ]
        }, 
        "show": {
            "$args": [
                "namespace", 
                "expand"
            ]
        }
    }, 
    "policy": {
        "set-definition": {
            "create": {
                "$args": [
                    "definitions", 
                    "name", 
                    "description", 
                    "display-name", 
                    "management-group", 
                    "params", 
                    "subscription"
                ]
            }, 
            "show": {
                "$args": [
                    "name", 
                    "management-group", 
                    "subscription"
                ]
            }, 
            "list": {
                "$args": [
                    "management-group", 
                    "subscription"
                ]
            }, 
            "update": {
                "$args": [
                    "name", 
                    "definitions", 
                    "description", 
                    "display-name", 
                    "management-group", 
                    "params", 
                    "subscription"
                ]
            }, 
            "delete": {
                "$args": [
                    "name", 
                    "management-group", 
                    "subscription"
                ]
            }
        }, 
        "assignment": {
            "create": {
                "$args": [
                    "display-name", 
                    "name", 
                    "not-scopes", 
                    "params", 
                    "policy", 
                    "policy-set-definition", 
                    "resource-group", 
                    "scope", 
                    "sku"
                ]
            }, 
            "show": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "scope"
                ]
            }, 
            "list": {
                "$args": [
                    "disable-scope-strict-match", 
                    "resource-group", 
                    "scope"
                ]
            }, 
            "delete": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "scope"
                ]
            }
        }, 
        "state": {
            "summarize": {
                "$args": [
                    "filter", 
                    "from", 
                    "to", 
                    "top", 
                    "namespace", 
                    "parent", 
                    "resource", 
                    "resource-type", 
                    "management-group", 
                    "policy-assignment", 
                    "policy-definition", 
                    "policy-set-definition", 
                    "resource-group"
                ]
            }, 
            "list": {
                "$args": [
                    "all", 
                    "apply", 
                    "filter", 
                    "from", 
                    "order-by", 
                    "select", 
                    "to", 
                    "top", 
                    "namespace", 
                    "parent", 
                    "resource", 
                    "resource-type", 
                    "management-group", 
                    "policy-assignment", 
                    "policy-definition", 
                    "policy-set-definition", 
                    "resource-group"
                ]
            }
        }, 
        "event": {
            "list": {
                "$args": [
                    "apply", 
                    "filter", 
                    "from", 
                    "order-by", 
                    "select", 
                    "to", 
                    "top", 
                    "namespace", 
                    "parent", 
                    "resource", 
                    "resource-type", 
                    "management-group", 
                    "policy-assignment", 
                    "policy-definition", 
                    "policy-set-definition", 
                    "resource-group"
                ]
            }
        }, 
        "definition": {
            "create": {
                "$args": [
                    "name", 
                    "description", 
                    "display-name", 
                    "management-group", 
                    "metadata", 
                    "mode", 
                    "params", 
                    "rules", 
                    "subscription"
                ]
            }, 
            "show": {
                "$args": [
                    "name", 
                    "management-group", 
                    "subscription"
                ]
            }, 
            "list": {
                "$args": [
                    "management-group", 
                    "subscription"
                ]
            }, 
            "update": {
                "$args": [
                    "name", 
                    "description", 
                    "display-name", 
                    "management-group", 
                    "metadata", 
                    "params", 
                    "rules", 
                    "subscription"
                ]
            }, 
            "delete": {
                "$args": [
                    "name", 
                    "management-group", 
                    "subscription"
                ]
            }
        }
    }, 
    "sig": {
        "show": {
            "$args": [
                "gallery-name", 
                "ids", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "create": {
            "$args": [
                "gallery-name", 
                "resource-group", 
                "description", 
                "location", 
                "tags"
            ]
        }, 
        "list": {
            "$args": [
                "resource-group"
            ]
        }, 
        "update": {
            "$args": [
                "gallery-name", 
                "resource-group", 
                "add", 
                "force-string", 
                "remove", 
                "set"
            ]
        }, 
        "image-version": {
            "show": {
                "$args": [
                    "gallery-image-definition", 
                    "gallery-image-version", 
                    "gallery-name", 
                    "resource-group", 
                    "expand"
                ]
            }, 
            "create": {
                "$args": [
                    "gallery-image-definition", 
                    "gallery-image-version", 
                    "gallery-name", 
                    "managed-image", 
                    "resource-group", 
                    "end-of-life-date", 
                    "exclude-from-latest", 
                    "location", 
                    "no-wait", 
                    "replica-count", 
                    "tags", 
                    "target-regions"
                ]
            }, 
            "list": {
                "$args": [
                    "gallery-image-definition", 
                    "gallery-name", 
                    "resource-group"
                ]
            }, 
            "update": {
                "$args": [
                    "gallery-image-definition", 
                    "gallery-image-version", 
                    "gallery-name", 
                    "resource-group", 
                    "no-wait", 
                    "target-regions", 
                    "add", 
                    "force-string", 
                    "remove", 
                    "set"
                ]
            }, 
            "delete": {
                "$args": [
                    "gallery-image-definition", 
                    "gallery-image-version", 
                    "gallery-name", 
                    "resource-group"
                ]
            }, 
            "wait": {
                "$args": [
                    "gallery-image-definition", 
                    "gallery-image-version", 
                    "gallery-name", 
                    "resource-group", 
                    "expand", 
                    "created", 
                    "custom", 
                    "deleted", 
                    "exists", 
                    "interval", 
                    "timeout", 
                    "updated"
                ]
            }
        }, 
        "image-definition": {
            "create": {
                "$args": [
                    "gallery-image-definition", 
                    "gallery-name", 
                    "offer", 
                    "os-type", 
                    "publisher", 
                    "resource-group", 
                    "sku", 
                    "description", 
                    "disallowed-disk-types", 
                    "end-of-life-date", 
                    "eula", 
                    "location", 
                    "privacy-statement-uri", 
                    "release-note-uri", 
                    "tags", 
                    "plan-name", 
                    "plan-product", 
                    "plan-publisher", 
                    "maximum-cpu-core", 
                    "maximum-memory", 
                    "minimum-cpu-core", 
                    "minimum-memory"
                ]
            }, 
            "show": {
                "$args": [
                    "gallery-image-definition", 
                    "gallery-name", 
                    "ids", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "list": {
                "$args": [
                    "gallery-name", 
                    "resource-group"
                ]
            }, 
            "update": {
                "$args": [
                    "gallery-image-definition", 
                    "gallery-name", 
                    "resource-group", 
                    "add", 
                    "force-string", 
                    "remove", 
                    "set"
                ]
            }, 
            "delete": {
                "$args": [
                    "gallery-image-definition", 
                    "gallery-name", 
                    "ids", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "delete": {
            "$args": [
                "gallery-name", 
                "resource-group"
            ]
        }
    }, 
    "configure": {
        "$args": [
            "defaults"
        ]
    }, 
    "image": {
        "create": {
            "$args": [
                "name", 
                "resource-group", 
                "source", 
                "data-disk-sources", 
                "location", 
                "os-type", 
                "storage-sku", 
                "tags", 
                "zone-resilient"
            ]
        }, 
        "show": {
            "$args": [
                "expand", 
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "list": {
            "$args": [
                "resource-group"
            ]
        }, 
        "delete": {
            "$args": [
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }
    }, 
    "vmss": {
        "show": {
            "$args": [
                "name", 
                "resource-group", 
                "instance-id"
            ]
        }, 
        "update-instances": {
            "$args": [
                "instance-ids", 
                "name", 
                "resource-group", 
                "no-wait"
            ]
        }, 
        "list-instance-connection-info": {
            "$args": [
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "reimage": {
            "$args": [
                "no-wait", 
                "ids", 
                "instance-id", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "perform-maintenance": {
            "$args": [
                "instance-ids", 
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "list-instances": {
            "$args": [
                "expand", 
                "filter", 
                "select", 
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "disk": {
            "attach": {
                "$args": [
                    "caching", 
                    "disk", 
                    "lun", 
                    "size-gb", 
                    "sku", 
                    "ids", 
                    "instance-id", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "detach": {
                "$args": [
                    "lun", 
                    "ids", 
                    "instance-id", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "list-instance-public-ips": {
            "$args": [
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "start": {
            "$args": [
                "name", 
                "resource-group", 
                "instance-ids", 
                "no-wait"
            ]
        }, 
        "encryption": {
            "enable": {
                "$args": [
                    "disk-encryption-keyvault", 
                    "force", 
                    "key-encryption-algorithm", 
                    "key-encryption-key", 
                    "key-encryption-keyvault", 
                    "volume-type", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "disable": {
                "$args": [
                    "force", 
                    "volume-type", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "show": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "create": {
            "$args": [
                "image", 
                "name", 
                "resource-group", 
                "custom-data", 
                "disable-overprovision", 
                "eviction-policy", 
                "health-probe", 
                "instance-count", 
                "license-type", 
                "location", 
                "no-wait", 
                "platform-fault-domain-count", 
                "priority", 
                "secrets", 
                "single-placement-group", 
                "tags", 
                "upgrade-policy-mode", 
                "validate", 
                "vm-sku", 
                "zones", 
                "admin-password", 
                "admin-username", 
                "authentication-type", 
                "generate-ssh-keys", 
                "ssh-dest-key-path", 
                "ssh-key-value", 
                "assign-identity", 
                "role", 
                "scope", 
                "plan-name", 
                "plan-product", 
                "plan-promotion-code", 
                "plan-publisher", 
                "accelerated-networking", 
                "asgs", 
                "dns-servers", 
                "nsg", 
                "public-ip-address", 
                "public-ip-address-allocation", 
                "public-ip-address-dns-name", 
                "public-ip-per-vm", 
                "subnet", 
                "subnet-address-prefix", 
                "vm-domain-name", 
                "vnet-address-prefix", 
                "vnet-name", 
                "app-gateway", 
                "app-gateway-capacity", 
                "app-gateway-sku", 
                "app-gateway-subnet-address-prefix", 
                "backend-pool-name", 
                "backend-port", 
                "lb", 
                "lb-nat-pool-name", 
                "lb-sku", 
                "data-disk-caching", 
                "data-disk-sizes-gb", 
                "ephemeral-os-disk", 
                "os-disk-caching", 
                "os-disk-name", 
                "os-type", 
                "storage-container-name", 
                "storage-sku", 
                "ultra-ssd-enabled", 
                "use-unmanaged-disk"
            ]
        }, 
        "get-os-upgrade-history": {
            "$args": [
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "delete-instances": {
            "$args": [
                "instance-ids", 
                "name", 
                "resource-group", 
                "no-wait"
            ]
        }, 
        "deallocate": {
            "$args": [
                "name", 
                "resource-group", 
                "instance-ids", 
                "no-wait"
            ]
        }, 
        "nic": {
            "list": {
                "$args": [
                    "resource-group", 
                    "vmss-name"
                ]
            }, 
            "list-vm-nics": {
                "$args": [
                    "ids", 
                    "instance-id", 
                    "resource-group", 
                    "subscription", 
                    "vmss-name"
                ]
            }, 
            "show": {
                "$args": [
                    "expand", 
                    "ids", 
                    "instance-id", 
                    "name", 
                    "resource-group", 
                    "subscription", 
                    "vmss-name"
                ]
            }
        }, 
        "get-instance-view": {
            "$args": [
                "ids", 
                "instance-id", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "stop": {
            "$args": [
                "name", 
                "resource-group", 
                "instance-ids", 
                "no-wait"
            ]
        }, 
        "update": {
            "$args": [
                "license-type", 
                "no-wait", 
                "add", 
                "force-string", 
                "remove", 
                "set", 
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "scale": {
            "$args": [
                "new-capacity", 
                "no-wait", 
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "rolling-upgrade": {
            "cancel": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "start": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "get-latest": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "restart": {
            "$args": [
                "name", 
                "resource-group", 
                "instance-ids", 
                "no-wait"
            ]
        }, 
        "wait": {
            "$args": [
                "ids", 
                "name", 
                "resource-group", 
                "subscription", 
                "created", 
                "custom", 
                "deleted", 
                "exists", 
                "interval", 
                "timeout", 
                "updated"
            ]
        }, 
        "extension": {
            "show": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "vmss-name"
                ]
            }, 
            "image": {
                "show": {
                    "$args": [
                        "location", 
                        "name", 
                        "publisher", 
                        "version"
                    ]
                }, 
                "list": {
                    "$args": [
                        "latest", 
                        "location", 
                        "name", 
                        "publisher", 
                        "version"
                    ]
                }, 
                "list-names": {
                    "$args": [
                        "location", 
                        "publisher"
                    ]
                }, 
                "list-versions": {
                    "$args": [
                        "location", 
                        "name", 
                        "publisher", 
                        "filter", 
                        "orderby", 
                        "top"
                    ]
                }
            }, 
            "set": {
                "$args": [
                    "name", 
                    "publisher", 
                    "resource-group", 
                    "vmss-name", 
                    "extension-instance-name", 
                    "force-update", 
                    "no-auto-upgrade", 
                    "no-wait", 
                    "protected-settings", 
                    "settings", 
                    "version"
                ]
            }, 
            "list": {
                "$args": [
                    "resource-group", 
                    "vmss-name"
                ]
            }, 
            "delete": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "vmss-name", 
                    "no-wait"
                ]
            }
        }, 
        "list": {
            "$args": [
                "resource-group"
            ]
        }, 
        "list-skus": {
            "$args": [
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "diagnostics": {
            "get-default-config": {
                "$args": [
                    "is-windows-os"
                ]
            }, 
            "set": {
                "$args": [
                    "resource-group", 
                    "settings", 
                    "vmss-name", 
                    "no-auto-upgrade", 
                    "protected-settings", 
                    "version"
                ]
            }
        }, 
        "identity": {
            "assign": {
                "$args": [
                    "identities", 
                    "role", 
                    "scope", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "remove": {
                "$args": [
                    "identities", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "show": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "delete": {
            "$args": [
                "no-wait", 
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }
    }, 
    "keyvault": {
        "delete-policy": {
            "$args": [
                "name", 
                "object-id", 
                "resource-group", 
                "spn", 
                "upn"
            ]
        }, 
        "list-deleted": {
            
        }, 
        "certificate": {
            "set-attributes": {
                "$args": [
                    "enabled", 
                    "policy", 
                    "tags", 
                    "id", 
                    "name", 
                    "vault-name", 
                    "version"
                ]
            }, 
            "recover": {
                "$args": [
                    "id", 
                    "name", 
                    "vault-name"
                ]
            }, 
            "list-deleted": {
                "$args": [
                    "include-pending", 
                    "maxresults", 
                    "vault-name"
                ]
            }, 
            "show-deleted": {
                "$args": [
                    "id", 
                    "name", 
                    "vault-name"
                ]
            }, 
            "show": {
                "$args": [
                    "id", 
                    "name", 
                    "vault-name", 
                    "version"
                ]
            }, 
            "create": {
                "$args": [
                    "policy", 
                    "disabled", 
                    "tags", 
                    "validity", 
                    "name", 
                    "vault-name"
                ]
            }, 
            "list": {
                "$args": [
                    "include-pending", 
                    "maxresults", 
                    "vault-name"
                ]
            }, 
            "get-default-policy": {
                "$args": [
                    "scaffold"
                ]
            }, 
            "purge": {
                "$args": [
                    "id", 
                    "name", 
                    "vault-name"
                ]
            }, 
            "contact": {
                "add": {
                    "$args": [
                        "email", 
                        "name", 
                        "phone", 
                        "vault-name"
                    ]
                }, 
                "list": {
                    "$args": [
                        "vault-name"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "email", 
                        "vault-name"
                    ]
                }
            }, 
            "list-versions": {
                "$args": [
                    "maxresults", 
                    "name", 
                    "vault-name"
                ]
            }, 
            "download": {
                "$args": [
                    "file", 
                    "encoding", 
                    "id", 
                    "name", 
                    "vault-name", 
                    "version"
                ]
            }, 
            "import": {
                "$args": [
                    "file", 
                    "disabled", 
                    "password", 
                    "policy", 
                    "tags", 
                    "name", 
                    "vault-name"
                ]
            }, 
            "issuer": {
                "show": {
                    "$args": [
                        "issuer-name", 
                        "vault-name"
                    ]
                }, 
                "admin": {
                    "add": {
                        "$args": [
                            "email", 
                            "issuer-name", 
                            "phone", 
                            "vault-name"
                        ]
                    }, 
                    "list": {
                        "$args": [
                            "issuer-name", 
                            "vault-name"
                        ]
                    }, 
                    "delete": {
                        "$args": [
                            "email", 
                            "issuer-name", 
                            "vault-name"
                        ]
                    }
                }, 
                "create": {
                    "$args": [
                        "issuer-name", 
                        "provider-name", 
                        "disabled", 
                        "vault-name", 
                        "account-id", 
                        "password", 
                        "organization-id"
                    ]
                }, 
                "list": {
                    "$args": [
                        "maxresults", 
                        "vault-name"
                    ]
                }, 
                "update": {
                    "$args": [
                        "issuer-name", 
                        "enabled", 
                        "provider-name", 
                        "vault-name", 
                        "account-id", 
                        "password", 
                        "organization-id"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "issuer-name", 
                        "vault-name"
                    ]
                }
            }, 
            "pending": {
                "merge": {
                    "$args": [
                        "file", 
                        "disabled", 
                        "expires", 
                        "not-before", 
                        "tags", 
                        "name", 
                        "vault-name"
                    ]
                }, 
                "show": {
                    "$args": [
                        "name", 
                        "vault-name"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "name", 
                        "vault-name"
                    ]
                }
            }, 
            "delete": {
                "$args": [
                    "id", 
                    "name", 
                    "vault-name"
                ]
            }
        }, 
        "show": {
            "$args": [
                "name", 
                "resource-group"
            ]
        }, 
        "list": {
            "$args": [
                "resource-group"
            ]
        }, 
        "create": {
            "$args": [
                "name", 
                "resource-group", 
                "enable-purge-protection", 
                "enable-soft-delete", 
                "enabled-for-deployment", 
                "enabled-for-disk-encryption", 
                "enabled-for-template-deployment", 
                "location", 
                "no-self-perms", 
                "sku", 
                "tags", 
                "bypass", 
                "default-action"
            ]
        }, 
        "storage": {
            "restore": {
                "$args": [
                    "vault-name"
                ]
            }, 
            "list-deleted": {
                "$args": [
                    "maxresults", 
                    "vault-name"
                ]
            }, 
            "regenerate-key": {
                "$args": [
                    "key-name", 
                    "id", 
                    "name", 
                    "vault-name"
                ]
            }, 
            "show": {
                "$args": [
                    "id", 
                    "name", 
                    "vault-name"
                ]
            }, 
            "list": {
                "$args": [
                    "maxresults", 
                    "vault-name"
                ]
            }, 
            "update": {
                "$args": [
                    "active-key-name", 
                    "auto-regenerate-key", 
                    "disabled", 
                    "regeneration-period", 
                    "tags", 
                    "id", 
                    "name", 
                    "vault-name"
                ]
            }, 
            "remove": {
                "$args": [
                    "id", 
                    "name", 
                    "vault-name"
                ]
            }, 
            "purge": {
                "$args": [
                    "name", 
                    "vault-name"
                ]
            }, 
            "sas-definition": {
                "show-deleted": {
                    "$args": [
                        "account-name", 
                        "name", 
                        "vault-name"
                    ]
                }, 
                "list-deleted": {
                    "$args": [
                        "maxresults", 
                        "account-name", 
                        "vault-name"
                    ]
                }, 
                "show": {
                    "$args": [
                        "account-name", 
                        "id", 
                        "name", 
                        "vault-name"
                    ]
                }, 
                "create": {
                    "$args": [
                        "sas-type", 
                        "template-uri", 
                        "validity-period", 
                        "disabled", 
                        "tags", 
                        "account-name", 
                        "name", 
                        "vault-name"
                    ]
                }, 
                "list": {
                    "$args": [
                        "maxresults", 
                        "account-name", 
                        "vault-name"
                    ]
                }, 
                "update": {
                    "$args": [
                        "disabled", 
                        "sas-type", 
                        "tags", 
                        "template-uri", 
                        "validity-period", 
                        "account-name", 
                        "id", 
                        "name", 
                        "vault-name"
                    ]
                }, 
                "recover": {
                    "$args": [
                        "account-name", 
                        "name", 
                        "vault-name"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "account-name", 
                        "id", 
                        "name", 
                        "vault-name"
                    ]
                }
            }, 
            "add": {
                "$args": [
                    "active-key-name", 
                    "resource-id", 
                    "auto-regenerate-key", 
                    "disabled", 
                    "regeneration-period", 
                    "tags", 
                    "name", 
                    "vault-name"
                ]
            }, 
            "recover": {
                "$args": [
                    "name", 
                    "vault-name"
                ]
            }, 
            "backup": {
                "$args": [
                    "file", 
                    "id", 
                    "name", 
                    "vault-name"
                ]
            }, 
            "show-deleted": {
                "$args": [
                    "name", 
                    "vault-name"
                ]
            }
        }, 
        "update": {
            "$args": [
                "name", 
                "enable-purge-protection", 
                "enable-soft-delete", 
                "enabled-for-deployment", 
                "enabled-for-disk-encryption", 
                "enabled-for-template-deployment", 
                "resource-group", 
                "add", 
                "force-string", 
                "remove", 
                "set", 
                "bypass", 
                "default-action"
            ]
        }, 
        "purge": {
            "$args": [
                "location", 
                "name"
            ]
        }, 
        "network-rule": {
            "add": {
                "$args": [
                    "name", 
                    "ip-address", 
                    "resource-group", 
                    "subnet", 
                    "vnet-name"
                ]
            }, 
            "list": {
                "$args": [
                    "name", 
                    "resource-group"
                ]
            }, 
            "remove": {
                "$args": [
                    "name", 
                    "ip-address", 
                    "resource-group", 
                    "subnet", 
                    "vnet-name"
                ]
            }
        }, 
        "secret": {
            "restore": {
                "$args": [
                    "vault-name"
                ]
            }, 
            "recover": {
                "$args": [
                    "id", 
                    "name", 
                    "vault-name"
                ]
            }, 
            "list-deleted": {
                "$args": [
                    "maxresults", 
                    "vault-name"
                ]
            }, 
            "show-deleted": {
                "$args": [
                    "id", 
                    "name", 
                    "vault-name"
                ]
            }, 
            "show": {
                "$args": [
                    "id", 
                    "name", 
                    "vault-name", 
                    "version"
                ]
            }, 
            "list": {
                "$args": [
                    "maxresults", 
                    "vault-name"
                ]
            }, 
            "set-attributes": {
                "$args": [
                    "content-type", 
                    "enabled", 
                    "expires", 
                    "not-before", 
                    "tags", 
                    "id", 
                    "name", 
                    "vault-name", 
                    "version"
                ]
            }, 
            "purge": {
                "$args": [
                    "id", 
                    "name", 
                    "vault-name"
                ]
            }, 
            "set": {
                "$args": [
                    "description", 
                    "disabled", 
                    "expires", 
                    "not-before", 
                    "tags", 
                    "encoding", 
                    "file", 
                    "value", 
                    "name", 
                    "vault-name"
                ]
            }, 
            "download": {
                "$args": [
                    "file", 
                    "encoding", 
                    "id", 
                    "name", 
                    "vault-name", 
                    "version"
                ]
            }, 
            "delete": {
                "$args": [
                    "id", 
                    "name", 
                    "vault-name"
                ]
            }, 
            "backup": {
                "$args": [
                    "id", 
                    "name", 
                    "vault-name"
                ]
            }, 
            "list-versions": {
                "$args": [
                    "maxresults", 
                    "name", 
                    "vault-name"
                ]
            }
        }, 
        "key": {
            "restore": {
                "$args": [
                    "file", 
                    "vault-name"
                ]
            }, 
            "recover": {
                "$args": [
                    "id", 
                    "name", 
                    "vault-name"
                ]
            }, 
            "list-deleted": {
                "$args": [
                    "maxresults", 
                    "vault-name"
                ]
            }, 
            "show-deleted": {
                "$args": [
                    "id", 
                    "name", 
                    "vault-name"
                ]
            }, 
            "show": {
                "$args": [
                    "id", 
                    "name", 
                    "vault-name", 
                    "version"
                ]
            }, 
            "create": {
                "$args": [
                    "curve", 
                    "disabled", 
                    "expires", 
                    "kty", 
                    "not-before", 
                    "ops", 
                    "protection", 
                    "size", 
                    "tags", 
                    "name", 
                    "vault-name"
                ]
            }, 
            "list": {
                "$args": [
                    "maxresults", 
                    "vault-name"
                ]
            }, 
            "set-attributes": {
                "$args": [
                    "enabled", 
                    "expires", 
                    "not-before", 
                    "ops", 
                    "tags", 
                    "id", 
                    "name", 
                    "vault-name", 
                    "version"
                ]
            }, 
            "purge": {
                "$args": [
                    "id", 
                    "name", 
                    "vault-name"
                ]
            }, 
            "import": {
                "$args": [
                    "disabled", 
                    "expires", 
                    "not-before", 
                    "ops", 
                    "protection", 
                    "tags", 
                    "name", 
                    "vault-name", 
                    "byok-file", 
                    "pem-file", 
                    "pem-password"
                ]
            }, 
            "list-versions": {
                "$args": [
                    "maxresults", 
                    "name", 
                    "vault-name"
                ]
            }, 
            "backup": {
                "$args": [
                    "file", 
                    "id", 
                    "name", 
                    "vault-name"
                ]
            }, 
            "delete": {
                "$args": [
                    "id", 
                    "name", 
                    "vault-name"
                ]
            }
        }, 
        "set-policy": {
            "$args": [
                "name", 
                "object-id", 
                "resource-group", 
                "spn", 
                "upn", 
                "certificate-permissions", 
                "key-permissions", 
                "secret-permissions", 
                "storage-permissions"
            ]
        }, 
        "recover": {
            "$args": [
                "location", 
                "name", 
                "resource-group"
            ]
        }, 
        "delete": {
            "$args": [
                "name", 
                "resource-group"
            ]
        }
    }, 
    "cognitiveservices": {
        "account": {
            "show": {
                "$args": [
                    "name", 
                    "resource-group"
                ]
            }, 
            "keys": {
                "regenerate": {
                    "$args": [
                        "key-name", 
                        "name", 
                        "resource-group"
                    ]
                }, 
                "list": {
                    "$args": [
                        "name", 
                        "resource-group"
                    ]
                }
            }, 
            "create": {
                "$args": [
                    "kind", 
                    "location", 
                    "name", 
                    "resource-group", 
                    "sku", 
                    "api-properties", 
                    "tags", 
                    "yes"
                ]
            }, 
            "list": {
                "$args": [
                    "resource-group"
                ]
            }, 
            "update": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "sku", 
                    "tags"
                ]
            }, 
            "list-usage": {
                "$args": [
                    "name", 
                    "resource-group"
                ]
            }, 
            "list-skus": {
                "$args": [
                    "kind", 
                    "location", 
                    "name", 
                    "resource-group"
                ]
            }, 
            "list-kinds": {
                
            }, 
            "delete": {
                "$args": [
                    "name", 
                    "resource-group"
                ]
            }
        }
    }, 
    "relay": {
        "hyco": {
            "authorization-rule": {
                "show": {
                    "$args": [
                        "hybrid-connection-name", 
                        "ids", 
                        "name", 
                        "namespace-name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "keys": {
                    "renew": {
                        "$args": [
                            "key", 
                            "key-value", 
                            "hybrid-connection-name", 
                            "ids", 
                            "name", 
                            "namespace-name", 
                            "resource-group", 
                            "subscription"
                        ]
                    }, 
                    "list": {
                        "$args": [
                            "hybrid-connection-name", 
                            "name", 
                            "namespace-name", 
                            "resource-group"
                        ]
                    }
                }, 
                "create": {
                    "$args": [
                        "hybrid-connection-name", 
                        "name", 
                        "namespace-name", 
                        "resource-group", 
                        "rights"
                    ]
                }, 
                "list": {
                    "$args": [
                        "hybrid-connection-name", 
                        "namespace-name", 
                        "resource-group"
                    ]
                }, 
                "update": {
                    "$args": [
                        "rights", 
                        "add", 
                        "force-string", 
                        "remove", 
                        "set", 
                        "hybrid-connection-name", 
                        "ids", 
                        "name", 
                        "namespace-name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "hybrid-connection-name", 
                        "ids", 
                        "name", 
                        "namespace-name", 
                        "resource-group", 
                        "subscription"
                    ]
                }
            }, 
            "show": {
                "$args": [
                    "ids", 
                    "name", 
                    "namespace-name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "create": {
                "$args": [
                    "name", 
                    "namespace-name", 
                    "resource-group", 
                    "requires-client-authorization", 
                    "user-metadata"
                ]
            }, 
            "list": {
                "$args": [
                    "namespace-name", 
                    "resource-group"
                ]
            }, 
            "update": {
                "$args": [
                    "requires-client-authorization", 
                    "status", 
                    "user-metadata", 
                    "add", 
                    "force-string", 
                    "remove", 
                    "set", 
                    "ids", 
                    "name", 
                    "namespace-name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "delete": {
                "$args": [
                    "ids", 
                    "name", 
                    "namespace-name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "namespace": {
            "authorization-rule": {
                "show": {
                    "$args": [
                        "ids", 
                        "name", 
                        "namespace-name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "keys": {
                    "renew": {
                        "$args": [
                            "key", 
                            "key-value", 
                            "ids", 
                            "name", 
                            "namespace-name", 
                            "resource-group", 
                            "subscription"
                        ]
                    }, 
                    "list": {
                        "$args": [
                            "name", 
                            "namespace-name", 
                            "resource-group"
                        ]
                    }
                }, 
                "create": {
                    "$args": [
                        "name", 
                        "namespace-name", 
                        "resource-group", 
                        "rights"
                    ]
                }, 
                "list": {
                    "$args": [
                        "namespace-name", 
                        "resource-group"
                    ]
                }, 
                "update": {
                    "$args": [
                        "rights", 
                        "add", 
                        "force-string", 
                        "remove", 
                        "set", 
                        "ids", 
                        "name", 
                        "namespace-name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "ids", 
                        "name", 
                        "namespace-name", 
                        "resource-group", 
                        "subscription"
                    ]
                }
            }, 
            "exists": {
                "$args": [
                    "name"
                ]
            }, 
            "show": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "create": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "location", 
                    "tags"
                ]
            }, 
            "list": {
                "$args": [
                    "resource-group"
                ]
            }, 
            "update": {
                "$args": [
                    "tags", 
                    "add", 
                    "force-string", 
                    "remove", 
                    "set", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "delete": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "wcfrelay": {
            "authorization-rule": {
                "show": {
                    "$args": [
                        "ids", 
                        "name", 
                        "namespace-name", 
                        "relay-name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "keys": {
                    "renew": {
                        "$args": [
                            "key", 
                            "key-value", 
                            "ids", 
                            "name", 
                            "namespace-name", 
                            "relay-name", 
                            "resource-group", 
                            "subscription"
                        ]
                    }, 
                    "list": {
                        "$args": [
                            "name", 
                            "namespace-name", 
                            "relay-name", 
                            "resource-group"
                        ]
                    }
                }, 
                "create": {
                    "$args": [
                        "name", 
                        "namespace-name", 
                        "relay-name", 
                        "resource-group", 
                        "rights"
                    ]
                }, 
                "list": {
                    "$args": [
                        "namespace-name", 
                        "relay-name", 
                        "resource-group"
                    ]
                }, 
                "update": {
                    "$args": [
                        "rights", 
                        "add", 
                        "force-string", 
                        "remove", 
                        "set", 
                        "ids", 
                        "name", 
                        "namespace-name", 
                        "relay-name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "ids", 
                        "name", 
                        "namespace-name", 
                        "relay-name", 
                        "resource-group", 
                        "subscription"
                    ]
                }
            }, 
            "show": {
                "$args": [
                    "ids", 
                    "name", 
                    "namespace-name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "create": {
                "$args": [
                    "name", 
                    "namespace-name", 
                    "relay-type", 
                    "resource-group", 
                    "requires-client-authorization", 
                    "user-metadata"
                ]
            }, 
            "list": {
                "$args": [
                    "namespace-name", 
                    "resource-group"
                ]
            }, 
            "update": {
                "$args": [
                    "relay-type", 
                    "requires-client-authorization", 
                    "status", 
                    "user-metadata", 
                    "add", 
                    "force-string", 
                    "remove", 
                    "set", 
                    "ids", 
                    "name", 
                    "namespace-name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "delete": {
                "$args": [
                    "ids", 
                    "name", 
                    "namespace-name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }
    }, 
    "iot": {
        "dps": {
            "certificate": {
                "show": {
                    "$args": [
                        "certificate-name", 
                        "dps-name", 
                        "resource-group"
                    ]
                }, 
                "verify": {
                    "$args": [
                        "certificate-name", 
                        "dps-name", 
                        "etag", 
                        "path", 
                        "resource-group"
                    ]
                }, 
                "create": {
                    "$args": [
                        "certificate-name", 
                        "dps-name", 
                        "path", 
                        "resource-group"
                    ]
                }, 
                "list": {
                    "$args": [
                        "dps-name", 
                        "resource-group"
                    ]
                }, 
                "update": {
                    "$args": [
                        "certificate-name", 
                        "dps-name", 
                        "etag", 
                        "path", 
                        "resource-group"
                    ]
                }, 
                "generate-verification-code": {
                    "$args": [
                        "certificate-name", 
                        "dps-name", 
                        "etag", 
                        "resource-group"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "certificate-name", 
                        "dps-name", 
                        "etag", 
                        "resource-group"
                    ]
                }
            }, 
            "show": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "create": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "location", 
                    "sku", 
                    "unit"
                ]
            }, 
            "linked-hub": {
                "create": {
                    "$args": [
                        "connection-string", 
                        "dps-name", 
                        "location", 
                        "resource-group", 
                        "allocation-weight", 
                        "apply-allocation-policy", 
                        "no-wait"
                    ]
                }, 
                "show": {
                    "$args": [
                        "dps-name", 
                        "linked-hub", 
                        "resource-group"
                    ]
                }, 
                "list": {
                    "$args": [
                        "dps-name", 
                        "resource-group"
                    ]
                }, 
                "update": {
                    "$args": [
                        "dps-name", 
                        "linked-hub", 
                        "resource-group", 
                        "allocation-weight", 
                        "apply-allocation-policy", 
                        "no-wait"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "dps-name", 
                        "linked-hub", 
                        "resource-group", 
                        "no-wait"
                    ]
                }
            }, 
            "list": {
                "$args": [
                    "resource-group"
                ]
            }, 
            "update": {
                "$args": [
                    "add", 
                    "force-string", 
                    "remove", 
                    "set", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "access-policy": {
                "create": {
                    "$args": [
                        "access-policy-name", 
                        "dps-name", 
                        "resource-group", 
                        "rights", 
                        "no-wait", 
                        "primary-key", 
                        "secondary-key"
                    ]
                }, 
                "show": {
                    "$args": [
                        "access-policy-name", 
                        "dps-name", 
                        "resource-group"
                    ]
                }, 
                "list": {
                    "$args": [
                        "dps-name", 
                        "resource-group"
                    ]
                }, 
                "update": {
                    "$args": [
                        "access-policy-name", 
                        "dps-name", 
                        "resource-group", 
                        "no-wait", 
                        "primary-key", 
                        "rights", 
                        "secondary-key"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "access-policy-name", 
                        "dps-name", 
                        "resource-group", 
                        "no-wait"
                    ]
                }
            }, 
            "delete": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "hub": {
            "show-quota-metrics": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "certificate": {
                "show": {
                    "$args": [
                        "name", 
                        "hub-name", 
                        "ids", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "verify": {
                    "$args": [
                        "etag", 
                        "name", 
                        "path", 
                        "hub-name", 
                        "ids", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "create": {
                    "$args": [
                        "hub-name", 
                        "name", 
                        "path", 
                        "resource-group"
                    ]
                }, 
                "list": {
                    "$args": [
                        "hub-name", 
                        "ids", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "update": {
                    "$args": [
                        "etag", 
                        "name", 
                        "path", 
                        "hub-name", 
                        "ids", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "generate-verification-code": {
                    "$args": [
                        "etag", 
                        "name", 
                        "hub-name", 
                        "ids", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "etag", 
                        "name", 
                        "hub-name", 
                        "ids", 
                        "resource-group", 
                        "subscription"
                    ]
                }
            }, 
            "show": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "route": {
                "show": {
                    "$args": [
                        "name", 
                        "hub-name", 
                        "ids", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "create": {
                    "$args": [
                        "en", 
                        "hub-name", 
                        "name", 
                        "source", 
                        "condition", 
                        "enabled", 
                        "resource-group"
                    ]
                }, 
                "list": {
                    "$args": [
                        "source", 
                        "hub-name", 
                        "ids", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "update": {
                    "$args": [
                        "name", 
                        "condition", 
                        "en", 
                        "enabled", 
                        "source", 
                        "hub-name", 
                        "ids", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "test": {
                    "$args": [
                        "ap", 
                        "body", 
                        "name", 
                        "source", 
                        "sp", 
                        "hub-name", 
                        "ids", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "name", 
                        "source", 
                        "hub-name", 
                        "ids", 
                        "resource-group", 
                        "subscription"
                    ]
                }
            }, 
            "list": {
                "$args": [
                    "resource-group"
                ]
            }, 
            "list-skus": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "update": {
                "$args": [
                    "add", 
                    "force-string", 
                    "remove", 
                    "set", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "consumer-group": {
                "create": {
                    "$args": [
                        "hub-name", 
                        "name", 
                        "event-hub-name", 
                        "resource-group"
                    ]
                }, 
                "show": {
                    "$args": [
                        "event-hub-name", 
                        "hub-name", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "list": {
                    "$args": [
                        "event-hub-name", 
                        "hub-name", 
                        "ids", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "event-hub-name", 
                        "hub-name", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }
            }, 
            "routing-endpoint": {
                "create": {
                    "$args": [
                        "connection-string", 
                        "endpoint-name", 
                        "endpoint-resource-group", 
                        "endpoint-subscription-id", 
                        "endpoint-type", 
                        "hub-name", 
                        "container", 
                        "resource-group"
                    ]
                }, 
                "show": {
                    "$args": [
                        "endpoint-name", 
                        "hub-name", 
                        "ids", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "list": {
                    "$args": [
                        "endpoint-type", 
                        "hub-name", 
                        "ids", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "endpoint-name", 
                        "endpoint-type", 
                        "hub-name", 
                        "ids", 
                        "resource-group", 
                        "subscription"
                    ]
                }
            }, 
            "job": {
                "cancel": {
                    "$args": [
                        "hub-name", 
                        "ids", 
                        "job-id", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "list": {
                    "$args": [
                        "hub-name", 
                        "ids", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "show": {
                    "$args": [
                        "hub-name", 
                        "ids", 
                        "job-id", 
                        "resource-group", 
                        "subscription"
                    ]
                }
            }, 
            "show-connection-string": {
                "$args": [
                    "key", 
                    "policy-name", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "show-stats": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "policy": {
                "create": {
                    "$args": [
                        "hub-name", 
                        "name", 
                        "permissions", 
                        "resource-group"
                    ]
                }, 
                "show": {
                    "$args": [
                        "hub-name", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "list": {
                    "$args": [
                        "hub-name", 
                        "ids", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "hub-name", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }
            }, 
            "create": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "location", 
                    "partition-count", 
                    "sku", 
                    "unit"
                ]
            }, 
            "delete": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }
    }, 
    "managedapp": {
        "definition": {
            "create": {
                "$args": [
                    "authorizations", 
                    "description", 
                    "display-name", 
                    "lock-level", 
                    "name", 
                    "resource-group", 
                    "create-ui-definition", 
                    "location", 
                    "main-template", 
                    "package-file-uri", 
                    "tags"
                ]
            }, 
            "show": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "list": {
                "$args": [
                    "resource-group"
                ]
            }, 
            "delete": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "create": {
            "$args": [
                "kind", 
                "managed-rg-id", 
                "name", 
                "resource-group", 
                "location", 
                "managedapp-definition-id", 
                "parameters", 
                "plan-name", 
                "plan-product", 
                "plan-publisher", 
                "plan-version", 
                "tags"
            ]
        }, 
        "show": {
            "$args": [
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "list": {
            "$args": [
                "resource-group"
            ]
        }, 
        "delete": {
            "$args": [
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }
    }, 
    "lab": {
        "arm-template": {
            "list": {
                "$args": [
                    "artifact-source-name", 
                    "lab-name", 
                    "resource-group", 
                    "expand", 
                    "filter", 
                    "orderby", 
                    "top"
                ]
            }, 
            "show": {
                "$args": [
                    "artifact-source-name", 
                    "lab-name", 
                    "name", 
                    "resource-group", 
                    "export-parameters"
                ]
            }
        }, 
        "get": {
            "$args": [
                "name", 
                "resource-group", 
                "expand"
            ]
        }, 
        "vm": {
            "claim": {
                "$args": [
                    "ids", 
                    "lab-name", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "show": {
                "$args": [
                    "lab-name", 
                    "name", 
                    "resource-group", 
                    "expand"
                ]
            }, 
            "apply-artifacts": {
                "$args": [
                    "lab-name", 
                    "name", 
                    "resource-group", 
                    "artifacts"
                ]
            }, 
            "create": {
                "$args": [
                    "lab-name", 
                    "name", 
                    "resource-group", 
                    "allow-claim", 
                    "artifacts", 
                    "disk-type", 
                    "expiration-date", 
                    "formula", 
                    "generate-ssh-keys", 
                    "image", 
                    "image-type", 
                    "notes", 
                    "size", 
                    "tags", 
                    "admin-password", 
                    "admin-username", 
                    "authentication-type", 
                    "saved-secret", 
                    "ssh-key", 
                    "ip-configuration", 
                    "subnet", 
                    "vnet-name"
                ]
            }, 
            "list": {
                "$args": [
                    "lab-name", 
                    "resource-group", 
                    "all", 
                    "claimable", 
                    "expand", 
                    "object-id", 
                    "order-by", 
                    "top", 
                    "environment", 
                    "filters"
                ]
            }, 
            "stop": {
                "$args": [
                    "lab-name", 
                    "name", 
                    "resource-group"
                ]
            }, 
            "start": {
                "$args": [
                    "lab-name", 
                    "name", 
                    "resource-group"
                ]
            }, 
            "delete": {
                "$args": [
                    "lab-name", 
                    "name", 
                    "resource-group"
                ]
            }
        }, 
        "artifact": {
            "list": {
                "$args": [
                    "artifact-source-name", 
                    "lab-name", 
                    "resource-group", 
                    "expand", 
                    "filter", 
                    "orderby", 
                    "top"
                ]
            }
        }, 
        "artifact-source": {
            "list": {
                "$args": [
                    "lab-name", 
                    "resource-group", 
                    "expand", 
                    "filter", 
                    "orderby", 
                    "top"
                ]
            }, 
            "show": {
                "$args": [
                    "lab-name", 
                    "name", 
                    "resource-group", 
                    "expand"
                ]
            }
        }, 
        "environment": {
            "create": {
                "$args": [
                    "arm-template", 
                    "lab-name", 
                    "name", 
                    "resource-group", 
                    "artifact-source-name", 
                    "parameters", 
                    "tags"
                ]
            }, 
            "show": {
                "$args": [
                    "lab-name", 
                    "name", 
                    "resource-group", 
                    "expand"
                ]
            }, 
            "list": {
                "$args": [
                    "lab-name", 
                    "resource-group", 
                    "expand", 
                    "filter", 
                    "orderby", 
                    "top"
                ]
            }, 
            "delete": {
                "$args": [
                    "lab-name", 
                    "name", 
                    "resource-group"
                ]
            }
        }, 
        "custom-image": {
            "create": {
                "$args": [
                    "lab-name", 
                    "name", 
                    "os-state", 
                    "os-type", 
                    "resource-group", 
                    "source-vm-id", 
                    "author", 
                    "description"
                ]
            }, 
            "show": {
                "$args": [
                    "lab-name", 
                    "name", 
                    "resource-group", 
                    "expand"
                ]
            }, 
            "list": {
                "$args": [
                    "lab-name", 
                    "resource-group", 
                    "expand", 
                    "filter", 
                    "orderby", 
                    "top"
                ]
            }, 
            "delete": {
                "$args": [
                    "lab-name", 
                    "name", 
                    "resource-group"
                ]
            }
        }, 
        "secret": {
            "show": {
                "$args": [
                    "lab-name", 
                    "name", 
                    "resource-group", 
                    "expand"
                ]
            }, 
            "set": {
                "$args": [
                    "lab-name", 
                    "name", 
                    "resource-group", 
                    "value"
                ]
            }, 
            "list": {
                "$args": [
                    "lab-name", 
                    "resource-group", 
                    "expand", 
                    "filter", 
                    "orderby", 
                    "top"
                ]
            }, 
            "delete": {
                "$args": [
                    "lab-name", 
                    "name", 
                    "resource-group"
                ]
            }
        }, 
        "vnet": {
            "list": {
                "$args": [
                    "lab-name", 
                    "resource-group", 
                    "expand", 
                    "filter", 
                    "orderby", 
                    "top"
                ]
            }, 
            "get": {
                "$args": [
                    "lab-name", 
                    "name", 
                    "resource-group", 
                    "expand"
                ]
            }
        }, 
        "gallery-image": {
            "list": {
                "$args": [
                    "lab-name", 
                    "resource-group", 
                    "expand", 
                    "filter", 
                    "orderby", 
                    "top"
                ]
            }
        }, 
        "formula": {
            "list": {
                "$args": [
                    "lab-name", 
                    "resource-group", 
                    "expand", 
                    "filter", 
                    "orderby", 
                    "top"
                ]
            }, 
            "show": {
                "$args": [
                    "lab-name", 
                    "name", 
                    "resource-group", 
                    "expand"
                ]
            }, 
            "export-artifacts": {
                "$args": [
                    "lab-name", 
                    "name", 
                    "resource-group"
                ]
            }, 
            "delete": {
                "$args": [
                    "lab-name", 
                    "name", 
                    "resource-group"
                ]
            }
        }, 
        "delete": {
            "$args": [
                "name", 
                "resource-group"
            ]
        }
    }, 
    "eventgrid": {
        "topic": {
            "show": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "create": {
                "$args": [
                    "location", 
                    "name", 
                    "resource-group", 
                    "tags"
                ]
            }, 
            "list": {
                "$args": [
                    "resource-group"
                ]
            }, 
            "update": {
                "$args": [
                    "tags", 
                    "add", 
                    "force-string", 
                    "remove", 
                    "set", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "key": {
                "regenerate": {
                    "$args": [
                        "key-name", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "list": {
                    "$args": [
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }
            }, 
            "delete": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "topic-type": {
            "list-event-types": {
                "$args": [
                    "name"
                ]
            }, 
            "list": {
                
            }, 
            "show": {
                "$args": [
                    "name"
                ]
            }
        }, 
        "event-subscription": {
            "create": {
                "$args": [
                    "endpoint", 
                    "name", 
                    "endpoint-type", 
                    "included-event-types", 
                    "labels", 
                    "resource-group", 
                    "resource-id", 
                    "subject-begins-with", 
                    "subject-case-sensitive", 
                    "subject-ends-with", 
                    "topic-name"
                ]
            }, 
            "show": {
                "$args": [
                    "name", 
                    "include-full-endpoint-url", 
                    "resource-group", 
                    "resource-id", 
                    "topic-name"
                ]
            }, 
            "list": {
                "$args": [
                    "location", 
                    "resource-group", 
                    "resource-id", 
                    "topic-name", 
                    "topic-type-name"
                ]
            }, 
            "update": {
                "$args": [
                    "name", 
                    "endpoint", 
                    "endpoint-type", 
                    "included-event-types", 
                    "labels", 
                    "resource-group", 
                    "resource-id", 
                    "subject-begins-with", 
                    "subject-ends-with", 
                    "topic-name", 
                    "add", 
                    "force-string", 
                    "remove", 
                    "set"
                ]
            }, 
            "delete": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "resource-id", 
                    "topic-name"
                ]
            }
        }
    }, 
    "logout": {
        "$args": [
            "username"
        ]
    }, 
    "network": {
        "profile": {
            "show": {
                "$args": [
                    "expand", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "list": {
                "$args": [
                    "resource-group"
                ]
            }, 
            "delete": {
                "$args": [
                    "yes", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "lb": {
            "inbound-nat-rule": {
                "create": {
                    "$args": [
                        "backend-port", 
                        "frontend-port", 
                        "lb-name", 
                        "name", 
                        "protocol", 
                        "resource-group", 
                        "enable-tcp-reset", 
                        "floating-ip", 
                        "frontend-ip-name", 
                        "idle-timeout"
                    ]
                }, 
                "show": {
                    "$args": [
                        "lb-name", 
                        "name", 
                        "resource-group"
                    ]
                }, 
                "list": {
                    "$args": [
                        "lb-name", 
                        "resource-group"
                    ]
                }, 
                "update": {
                    "$args": [
                        "backend-port", 
                        "enable-tcp-reset", 
                        "floating-ip", 
                        "frontend-ip-name", 
                        "frontend-port", 
                        "idle-timeout", 
                        "protocol", 
                        "add", 
                        "force-string", 
                        "remove", 
                        "set", 
                        "ids", 
                        "lb-name", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "lb-name", 
                        "name", 
                        "resource-group"
                    ]
                }
            }, 
            "address-pool": {
                "create": {
                    "$args": [
                        "lb-name", 
                        "name", 
                        "resource-group"
                    ]
                }, 
                "show": {
                    "$args": [
                        "lb-name", 
                        "name", 
                        "resource-group"
                    ]
                }, 
                "list": {
                    "$args": [
                        "lb-name", 
                        "resource-group"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "lb-name", 
                        "name", 
                        "resource-group"
                    ]
                }
            }, 
            "show": {
                "$args": [
                    "expand", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "create": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "backend-pool-name", 
                    "frontend-ip-name", 
                    "frontend-ip-zone", 
                    "location", 
                    "no-wait", 
                    "private-ip-address", 
                    "sku", 
                    "tags", 
                    "validate", 
                    "public-ip-address", 
                    "public-ip-address-allocation", 
                    "public-ip-dns-name", 
                    "public-ip-zone", 
                    "subnet", 
                    "subnet-address-prefix", 
                    "vnet-address-prefix", 
                    "vnet-name"
                ]
            }, 
            "probe": {
                "create": {
                    "$args": [
                        "lb-name", 
                        "name", 
                        "port", 
                        "protocol", 
                        "resource-group", 
                        "interval", 
                        "path", 
                        "threshold"
                    ]
                }, 
                "show": {
                    "$args": [
                        "lb-name", 
                        "name", 
                        "resource-group"
                    ]
                }, 
                "list": {
                    "$args": [
                        "lb-name", 
                        "resource-group"
                    ]
                }, 
                "update": {
                    "$args": [
                        "interval", 
                        "path", 
                        "port", 
                        "protocol", 
                        "threshold", 
                        "add", 
                        "force-string", 
                        "remove", 
                        "set", 
                        "ids", 
                        "lb-name", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "lb-name", 
                        "name", 
                        "resource-group"
                    ]
                }
            }, 
            "list": {
                "$args": [
                    "resource-group"
                ]
            }, 
            "frontend-ip": {
                "create": {
                    "$args": [
                        "lb-name", 
                        "name", 
                        "resource-group", 
                        "private-ip-address", 
                        "public-ip-address", 
                        "public-ip-prefix", 
                        "subnet", 
                        "vnet-name", 
                        "zone"
                    ]
                }, 
                "show": {
                    "$args": [
                        "lb-name", 
                        "name", 
                        "resource-group"
                    ]
                }, 
                "list": {
                    "$args": [
                        "lb-name", 
                        "resource-group"
                    ]
                }, 
                "update": {
                    "$args": [
                        "private-ip-address", 
                        "public-ip-address", 
                        "public-ip-prefix", 
                        "subnet", 
                        "vnet-name", 
                        "add", 
                        "force-string", 
                        "remove", 
                        "set", 
                        "ids", 
                        "lb-name", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "lb-name", 
                        "name", 
                        "resource-group"
                    ]
                }
            }, 
            "rule": {
                "create": {
                    "$args": [
                        "backend-port", 
                        "frontend-port", 
                        "lb-name", 
                        "name", 
                        "protocol", 
                        "resource-group", 
                        "backend-pool-name", 
                        "disable-outbound-snat", 
                        "enable-tcp-reset", 
                        "floating-ip", 
                        "frontend-ip-name", 
                        "idle-timeout", 
                        "load-distribution", 
                        "probe-name"
                    ]
                }, 
                "show": {
                    "$args": [
                        "lb-name", 
                        "name", 
                        "resource-group"
                    ]
                }, 
                "list": {
                    "$args": [
                        "lb-name", 
                        "resource-group"
                    ]
                }, 
                "update": {
                    "$args": [
                        "backend-pool-name", 
                        "backend-port", 
                        "disable-outbound-snat", 
                        "enable-tcp-reset", 
                        "floating-ip", 
                        "frontend-ip-name", 
                        "frontend-port", 
                        "idle-timeout", 
                        "load-distribution", 
                        "probe-name", 
                        "protocol", 
                        "add", 
                        "force-string", 
                        "remove", 
                        "set", 
                        "ids", 
                        "lb-name", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "lb-name", 
                        "name", 
                        "resource-group"
                    ]
                }
            }, 
            "update": {
                "$args": [
                    "add", 
                    "force-string", 
                    "remove", 
                    "set", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "inbound-nat-pool": {
                "create": {
                    "$args": [
                        "backend-port", 
                        "frontend-port-range-end", 
                        "frontend-port-range-start", 
                        "lb-name", 
                        "name", 
                        "protocol", 
                        "resource-group", 
                        "enable-tcp-reset", 
                        "frontend-ip-name"
                    ]
                }, 
                "show": {
                    "$args": [
                        "lb-name", 
                        "name", 
                        "resource-group"
                    ]
                }, 
                "list": {
                    "$args": [
                        "lb-name", 
                        "resource-group"
                    ]
                }, 
                "update": {
                    "$args": [
                        "backend-port", 
                        "enable-tcp-reset", 
                        "frontend-ip-name", 
                        "frontend-port-range-end", 
                        "frontend-port-range-start", 
                        "protocol", 
                        "add", 
                        "force-string", 
                        "remove", 
                        "set", 
                        "ids", 
                        "lb-name", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "lb-name", 
                        "name", 
                        "resource-group"
                    ]
                }
            }, 
            "outbound-rule": {
                "create": {
                    "$args": [
                        "address-pool", 
                        "frontend-ip-configs", 
                        "lb-name", 
                        "name", 
                        "protocol", 
                        "resource-group", 
                        "enable-tcp-reset", 
                        "idle-timeout", 
                        "outbound-ports"
                    ]
                }, 
                "show": {
                    "$args": [
                        "lb-name", 
                        "name", 
                        "resource-group"
                    ]
                }, 
                "list": {
                    "$args": [
                        "lb-name", 
                        "resource-group"
                    ]
                }, 
                "update": {
                    "$args": [
                        "address-pool", 
                        "enable-tcp-reset", 
                        "frontend-ip-configs", 
                        "idle-timeout", 
                        "outbound-ports", 
                        "protocol", 
                        "add", 
                        "force-string", 
                        "remove", 
                        "set", 
                        "ids", 
                        "lb-name", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "lb-name", 
                        "name", 
                        "resource-group"
                    ]
                }
            }, 
            "delete": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "express-route": {
            "list-service-providers": {
                
            }, 
            "get-stats": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "show": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "create": {
                "$args": [
                    "bandwidth", 
                    "name", 
                    "peering-location", 
                    "provider", 
                    "resource-group", 
                    "allow-global-reach", 
                    "location", 
                    "no-wait", 
                    "sku-family", 
                    "sku-tier", 
                    "tags"
                ]
            }, 
            "peering": {
                "show": {
                    "$args": [
                        "circuit-name", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "create": {
                    "$args": [
                        "circuit-name", 
                        "peer-asn", 
                        "peering-type", 
                        "primary-peer-subnet", 
                        "resource-group", 
                        "secondary-peer-subnet", 
                        "vlan-id", 
                        "shared-key", 
                        "advertised-public-prefixes", 
                        "customer-asn", 
                        "route-filter", 
                        "routing-registry-name"
                    ]
                }, 
                "list": {
                    "$args": [
                        "circuit-name", 
                        "resource-group"
                    ]
                }, 
                "update": {
                    "$args": [
                        "peer-asn", 
                        "primary-peer-subnet", 
                        "secondary-peer-subnet", 
                        "shared-key", 
                        "vlan-id", 
                        "add", 
                        "force-string", 
                        "remove", 
                        "set", 
                        "advertised-public-prefixes", 
                        "customer-asn", 
                        "ip-version", 
                        "route-filter", 
                        "routing-registry-name", 
                        "circuit-name", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "connection": {
                    "create": {
                        "$args": [
                            "address-prefix", 
                            "circuit-name", 
                            "name", 
                            "peer-circuit", 
                            "peering-name", 
                            "resource-group", 
                            "authorization-key"
                        ]
                    }, 
                    "show": {
                        "$args": [
                            "circuit-name", 
                            "ids", 
                            "name", 
                            "peering-name", 
                            "resource-group", 
                            "subscription"
                        ]
                    }, 
                    "delete": {
                        "$args": [
                            "circuit-name", 
                            "ids", 
                            "name", 
                            "peering-name", 
                            "resource-group", 
                            "subscription"
                        ]
                    }
                }, 
                "delete": {
                    "$args": [
                        "circuit-name", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }
            }, 
            "list": {
                "$args": [
                    "resource-group"
                ]
            }, 
            "list-arp-tables": {
                "$args": [
                    "path", 
                    "peering-name", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "auth": {
                "create": {
                    "$args": [
                        "circuit-name", 
                        "name", 
                        "resource-group"
                    ]
                }, 
                "show": {
                    "$args": [
                        "circuit-name", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "list": {
                    "$args": [
                        "circuit-name", 
                        "resource-group"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "circuit-name", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }
            }, 
            "list-route-tables": {
                "$args": [
                    "path", 
                    "peering-name", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "wait": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription", 
                    "created", 
                    "custom", 
                    "deleted", 
                    "exists", 
                    "interval", 
                    "timeout", 
                    "updated"
                ]
            }, 
            "update": {
                "$args": [
                    "allow-global-reach", 
                    "bandwidth", 
                    "no-wait", 
                    "peering-location", 
                    "provider", 
                    "sku-family", 
                    "sku-tier", 
                    "tags", 
                    "add", 
                    "force-string", 
                    "remove", 
                    "set", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "delete": {
                "$args": [
                    "no-wait", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "vnet-gateway": {
            "reset": {
                "$args": [
                    "gateway-vip", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "show": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "revoked-cert": {
                "create": {
                    "$args": [
                        "gateway-name", 
                        "name", 
                        "resource-group", 
                        "thumbprint"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "gateway-name", 
                        "name", 
                        "resource-group"
                    ]
                }
            }, 
            "create": {
                "$args": [
                    "name", 
                    "public-ip-addresses", 
                    "resource-group", 
                    "vnet", 
                    "gateway-type", 
                    "location", 
                    "no-wait", 
                    "sku", 
                    "tags", 
                    "vpn-type", 
                    "asn", 
                    "bgp-peering-address", 
                    "peer-weight", 
                    "address-prefixes", 
                    "client-protocol", 
                    "radius-secret", 
                    "radius-server"
                ]
            }, 
            "list": {
                "$args": [
                    "resource-group"
                ]
            }, 
            "update": {
                "$args": [
                    "gateway-type", 
                    "no-wait", 
                    "public-ip-addresses", 
                    "sku", 
                    "tags", 
                    "vnet", 
                    "vpn-type", 
                    "asn", 
                    "bgp-peering-address", 
                    "enable-bgp", 
                    "peer-weight", 
                    "add", 
                    "force-string", 
                    "remove", 
                    "set", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription", 
                    "address-prefixes", 
                    "client-protocol", 
                    "radius-secret", 
                    "radius-server"
                ]
            }, 
            "root-cert": {
                "create": {
                    "$args": [
                        "gateway-name", 
                        "name", 
                        "public-cert-data", 
                        "resource-group"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "gateway-name", 
                        "name", 
                        "resource-group"
                    ]
                }
            }, 
            "list-learned-routes": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "list-bgp-peer-status": {
                "$args": [
                    "peer", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "list-advertised-routes": {
                "$args": [
                    "peer", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "vpn-client": {
                "generate": {
                    "$args": [
                        "authentication-method", 
                        "client-root-certificates", 
                        "processor-architecture", 
                        "radius-server-auth-certificate", 
                        "use-legacy", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "show-url": {
                    "$args": [
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }
            }, 
            "wait": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription", 
                    "created", 
                    "custom", 
                    "deleted", 
                    "exists", 
                    "interval", 
                    "timeout", 
                    "updated"
                ]
            }, 
            "delete": {
                "$args": [
                    "no-wait", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "nic": {
            "show-effective-route-table": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "list-effective-nsg": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "show": {
                "$args": [
                    "expand", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "create": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "subnet", 
                    "accelerated-networking", 
                    "application-security-groups", 
                    "ip-forwarding", 
                    "location", 
                    "network-security-group", 
                    "no-wait", 
                    "private-ip-address", 
                    "private-ip-address-version", 
                    "public-ip-address", 
                    "tags", 
                    "vnet-name", 
                    "app-gateway-address-pools", 
                    "gateway-name", 
                    "dns-servers", 
                    "internal-dns-name", 
                    "lb-address-pools", 
                    "lb-inbound-nat-rules", 
                    "lb-name"
                ]
            }, 
            "list": {
                "$args": [
                    "resource-group"
                ]
            }, 
            "update": {
                "$args": [
                    "accelerated-networking", 
                    "ip-forwarding", 
                    "network-security-group", 
                    "no-wait", 
                    "dns-servers", 
                    "internal-dns-name", 
                    "add", 
                    "force-string", 
                    "remove", 
                    "set", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "wait": {
                "$args": [
                    "expand", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription", 
                    "created", 
                    "custom", 
                    "deleted", 
                    "exists", 
                    "interval", 
                    "timeout", 
                    "updated"
                ]
            }, 
            "ip-config": {
                "inbound-nat-rule": {
                    "add": {
                        "$args": [
                            "inbound-nat-rule", 
                            "lb-name", 
                            "ids", 
                            "ip-config-name", 
                            "nic-name", 
                            "resource-group", 
                            "subscription"
                        ]
                    }, 
                    "remove": {
                        "$args": [
                            "inbound-nat-rule", 
                            "ip-config-name", 
                            "nic-name", 
                            "resource-group", 
                            "lb-name"
                        ]
                    }
                }, 
                "address-pool": {
                    "add": {
                        "$args": [
                            "address-pool", 
                            "lb-name", 
                            "ids", 
                            "ip-config-name", 
                            "nic-name", 
                            "resource-group", 
                            "subscription"
                        ]
                    }, 
                    "remove": {
                        "$args": [
                            "address-pool", 
                            "ip-config-name", 
                            "nic-name", 
                            "resource-group", 
                            "lb-name"
                        ]
                    }
                }, 
                "show": {
                    "$args": [
                        "ids", 
                        "name", 
                        "nic-name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "create": {
                    "$args": [
                        "name", 
                        "nic-name", 
                        "resource-group", 
                        "application-security-groups", 
                        "make-primary", 
                        "private-ip-address", 
                        "private-ip-address-version", 
                        "public-ip-address", 
                        "subnet", 
                        "vnet-name", 
                        "app-gateway-address-pools", 
                        "gateway-name", 
                        "lb-address-pools", 
                        "lb-inbound-nat-rules", 
                        "lb-name"
                    ]
                }, 
                "list": {
                    "$args": [
                        "nic-name", 
                        "resource-group"
                    ]
                }, 
                "update": {
                    "$args": [
                        "application-security-groups", 
                        "make-primary", 
                        "private-ip-address", 
                        "private-ip-address-version", 
                        "public-ip-address", 
                        "subnet", 
                        "vnet-name", 
                        "app-gateway-address-pools", 
                        "gateway-name", 
                        "add", 
                        "force-string", 
                        "remove", 
                        "set", 
                        "lb-address-pools", 
                        "lb-inbound-nat-rules", 
                        "lb-name", 
                        "ids", 
                        "name", 
                        "nic-name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "ids", 
                        "name", 
                        "nic-name", 
                        "resource-group", 
                        "subscription"
                    ]
                }
            }, 
            "delete": {
                "$args": [
                    "no-wait", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "route-table": {
            "show": {
                "$args": [
                    "expand", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "route": {
                "create": {
                    "$args": [
                        "address-prefix", 
                        "name", 
                        "next-hop-type", 
                        "resource-group", 
                        "route-table-name", 
                        "next-hop-ip-address"
                    ]
                }, 
                "show": {
                    "$args": [
                        "ids", 
                        "name", 
                        "resource-group", 
                        "route-table-name", 
                        "subscription"
                    ]
                }, 
                "list": {
                    "$args": [
                        "resource-group", 
                        "route-table-name"
                    ]
                }, 
                "update": {
                    "$args": [
                        "address-prefix", 
                        "next-hop-ip-address", 
                        "next-hop-type", 
                        "add", 
                        "force-string", 
                        "remove", 
                        "set", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "route-table-name", 
                        "subscription"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "ids", 
                        "name", 
                        "resource-group", 
                        "route-table-name", 
                        "subscription"
                    ]
                }
            }, 
            "list": {
                "$args": [
                    "resource-group"
                ]
            }, 
            "update": {
                "$args": [
                    "disable-bgp-route-propagation", 
                    "tags", 
                    "add", 
                    "force-string", 
                    "remove", 
                    "set", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "create": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "disable-bgp-route-propagation", 
                    "location", 
                    "tags"
                ]
            }, 
            "delete": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "list-usages": {
            "$args": [
                "location"
            ]
        }, 
        "private-endpoint": {
            "list": {
                "$args": [
                    "resource-group"
                ]
            }, 
            "show": {
                "$args": [
                    "expand", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "public-ip": {
            "show": {
                "$args": [
                    "expand", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "create": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "allocation-method", 
                    "dns-name", 
                    "idle-timeout", 
                    "ip-tags", 
                    "location", 
                    "public-ip-prefix", 
                    "reverse-fqdn", 
                    "sku", 
                    "tags", 
                    "version", 
                    "zone"
                ]
            }, 
            "list": {
                "$args": [
                    "resource-group"
                ]
            }, 
            "update": {
                "$args": [
                    "allocation-method", 
                    "dns-name", 
                    "idle-timeout", 
                    "ip-tags", 
                    "public-ip-prefix", 
                    "reverse-fqdn", 
                    "sku", 
                    "tags", 
                    "version", 
                    "add", 
                    "force-string", 
                    "remove", 
                    "set", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "prefix": {
                "create": {
                    "$args": [
                        "length", 
                        "name", 
                        "resource-group", 
                        "location", 
                        "tags"
                    ]
                }, 
                "show": {
                    "$args": [
                        "expand", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "list": {
                    "$args": [
                        "resource-group"
                    ]
                }, 
                "update": {
                    "$args": [
                        "tags", 
                        "add", 
                        "force-string", 
                        "remove", 
                        "set", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }
            }, 
            "delete": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "nsg": {
            "show": {
                "$args": [
                    "expand", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "create": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "location", 
                    "tags"
                ]
            }, 
            "list": {
                "$args": [
                    "resource-group"
                ]
            }, 
            "update": {
                "$args": [
                    "add", 
                    "force-string", 
                    "remove", 
                    "set", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "rule": {
                "create": {
                    "$args": [
                        "name", 
                        "nsg-name", 
                        "priority", 
                        "resource-group", 
                        "access", 
                        "description", 
                        "direction", 
                        "protocol", 
                        "destination-address-prefixes", 
                        "destination-asgs", 
                        "destination-port-ranges", 
                        "source-address-prefixes", 
                        "source-asgs", 
                        "source-port-ranges"
                    ]
                }, 
                "show": {
                    "$args": [
                        "ids", 
                        "name", 
                        "nsg-name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "list": {
                    "$args": [
                        "nsg-name", 
                        "resource-group", 
                        "include-default"
                    ]
                }, 
                "update": {
                    "$args": [
                        "access", 
                        "description", 
                        "direction", 
                        "priority", 
                        "protocol", 
                        "destination-address-prefixes", 
                        "destination-asgs", 
                        "destination-port-ranges", 
                        "add", 
                        "force-string", 
                        "remove", 
                        "set", 
                        "ids", 
                        "name", 
                        "nsg-name", 
                        "resource-group", 
                        "subscription", 
                        "source-address-prefixes", 
                        "source-asgs", 
                        "source-port-ranges"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "ids", 
                        "name", 
                        "nsg-name", 
                        "resource-group", 
                        "subscription"
                    ]
                }
            }, 
            "delete": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "vnet": {
            "subnet": {
                "show": {
                    "$args": [
                        "expand", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription", 
                        "vnet-name"
                    ]
                }, 
                "create": {
                    "$args": [
                        "address-prefixes", 
                        "name", 
                        "resource-group", 
                        "vnet-name", 
                        "delegations", 
                        "network-security-group", 
                        "route-table", 
                        "service-endpoint-policy", 
                        "service-endpoints"
                    ]
                }, 
                "list": {
                    "$args": [
                        "resource-group", 
                        "subscription", 
                        "vnet-name"
                    ]
                }, 
                "update": {
                    "$args": [
                        "address-prefixes", 
                        "delegations", 
                        "network-security-group", 
                        "route-table", 
                        "service-endpoint-policy", 
                        "service-endpoints", 
                        "add", 
                        "force-string", 
                        "remove", 
                        "set", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription", 
                        "vnet-name"
                    ]
                }, 
                "list-available-delegations": {
                    "$args": [
                        "location", 
                        "resource-group"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription", 
                        "vnet-name"
                    ]
                }
            }, 
            "check-ip-address": {
                "$args": [
                    "ip-address", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "show": {
                "$args": [
                    "expand", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "create": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "address-prefixes", 
                    "ddos-protection", 
                    "ddos-protection-plan", 
                    "dns-servers", 
                    "location", 
                    "tags", 
                    "vm-protection", 
                    "subnet-name", 
                    "subnet-prefixes"
                ]
            }, 
            "peering": {
                "create": {
                    "$args": [
                        "name", 
                        "remote-vnet", 
                        "resource-group", 
                        "vnet-name", 
                        "allow-forwarded-traffic", 
                        "allow-gateway-transit", 
                        "allow-vnet-access", 
                        "use-remote-gateways"
                    ]
                }, 
                "show": {
                    "$args": [
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription", 
                        "vnet-name"
                    ]
                }, 
                "list": {
                    "$args": [
                        "resource-group", 
                        "subscription", 
                        "vnet-name"
                    ]
                }, 
                "update": {
                    "$args": [
                        "add", 
                        "force-string", 
                        "remove", 
                        "set", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription", 
                        "vnet-name"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription", 
                        "vnet-name"
                    ]
                }
            }, 
            "list": {
                "$args": [
                    "resource-group"
                ]
            }, 
            "update": {
                "$args": [
                    "address-prefixes", 
                    "ddos-protection", 
                    "ddos-protection-plan", 
                    "dns-servers", 
                    "vm-protection", 
                    "add", 
                    "force-string", 
                    "remove", 
                    "set", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "list-endpoint-services": {
                "$args": [
                    "location"
                ]
            }, 
            "delete": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "asg": {
            "create": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "location", 
                    "tags"
                ]
            }, 
            "show": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "list": {
                
            }, 
            "update": {
                "$args": [
                    "tags", 
                    "add", 
                    "force-string", 
                    "remove", 
                    "set", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "delete": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "traffic-manager": {
            "profile": {
                "show": {
                    "$args": [
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "create": {
                    "$args": [
                        "name", 
                        "resource-group", 
                        "routing-method", 
                        "unique-dns-name", 
                        "status", 
                        "tags", 
                        "ttl", 
                        "interval", 
                        "max-failures", 
                        "path", 
                        "port", 
                        "protocol", 
                        "timeout"
                    ]
                }, 
                "list": {
                    "$args": [
                        "resource-group"
                    ]
                }, 
                "update": {
                    "$args": [
                        "routing-method", 
                        "status", 
                        "tags", 
                        "ttl", 
                        "add", 
                        "force-string", 
                        "remove", 
                        "set", 
                        "interval", 
                        "max-failures", 
                        "path", 
                        "port", 
                        "protocol", 
                        "timeout", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "check-dns": {
                    "$args": [
                        "name"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }
            }, 
            "endpoint": {
                "show": {
                    "$args": [
                        "ids", 
                        "name", 
                        "profile-name", 
                        "resource-group", 
                        "subscription", 
                        "type"
                    ]
                }, 
                "create": {
                    "$args": [
                        "name", 
                        "profile-name", 
                        "resource-group", 
                        "type", 
                        "endpoint-location", 
                        "endpoint-monitor-status", 
                        "endpoint-status", 
                        "geo-mapping", 
                        "min-child-endpoints", 
                        "priority", 
                        "target", 
                        "target-resource-id", 
                        "weight"
                    ]
                }, 
                "list": {
                    "$args": [
                        "profile-name", 
                        "resource-group", 
                        "type"
                    ]
                }, 
                "update": {
                    "$args": [
                        "endpoint-location", 
                        "endpoint-monitor-status", 
                        "endpoint-status", 
                        "geo-mapping", 
                        "min-child-endpoints", 
                        "priority", 
                        "target", 
                        "target-resource-id", 
                        "weight", 
                        "add", 
                        "force-string", 
                        "remove", 
                        "set", 
                        "ids", 
                        "name", 
                        "profile-name", 
                        "resource-group", 
                        "subscription", 
                        "type"
                    ]
                }, 
                "show-geographic-hierarchy": {
                    
                }, 
                "delete": {
                    "$args": [
                        "ids", 
                        "name", 
                        "profile-name", 
                        "resource-group", 
                        "subscription", 
                        "type"
                    ]
                }
            }
        }, 
        "dns": {
            "list-references": {
                "$args": [
                    "target-resources"
                ]
            }, 
            "record-set": {
                "a": {
                    "show": {
                        "$args": [
                            "name", 
                            "resource-group", 
                            "zone-name"
                        ]
                    }, 
                    "create": {
                        "$args": [
                            "name", 
                            "resource-group", 
                            "zone-name", 
                            "if-match", 
                            "if-none-match", 
                            "metadata", 
                            "target-resource", 
                            "ttl"
                        ]
                    }, 
                    "list": {
                        "$args": [
                            "resource-group", 
                            "zone-name"
                        ]
                    }, 
                    "update": {
                        "$args": [
                            "name", 
                            "resource-group", 
                            "zone-name", 
                            "if-match", 
                            "if-none-match", 
                            "metadata", 
                            "target-resource", 
                            "add", 
                            "force-string", 
                            "remove", 
                            "set"
                        ]
                    }, 
                    "add-record": {
                        "$args": [
                            "ipv4-address", 
                            "record-set-name", 
                            "resource-group", 
                            "zone-name"
                        ]
                    }, 
                    "delete": {
                        "$args": [
                            "name", 
                            "resource-group", 
                            "zone-name", 
                            "if-match", 
                            "yes"
                        ]
                    }, 
                    "remove-record": {
                        "$args": [
                            "ipv4-address", 
                            "record-set-name", 
                            "resource-group", 
                            "zone-name", 
                            "keep-empty-record-set"
                        ]
                    }
                }, 
                "soa": {
                    "update": {
                        "$args": [
                            "resource-group", 
                            "zone-name", 
                            "email", 
                            "expire-time", 
                            "host", 
                            "minimum-ttl", 
                            "refresh-time", 
                            "retry-time", 
                            "serial-number"
                        ]
                    }, 
                    "show": {
                        "$args": [
                            "resource-group", 
                            "zone-name"
                        ]
                    }
                }, 
                "txt": {
                    "show": {
                        "$args": [
                            "name", 
                            "resource-group", 
                            "zone-name"
                        ]
                    }, 
                    "create": {
                        "$args": [
                            "name", 
                            "resource-group", 
                            "zone-name", 
                            "if-match", 
                            "if-none-match", 
                            "metadata", 
                            "target-resource", 
                            "ttl"
                        ]
                    }, 
                    "list": {
                        "$args": [
                            "resource-group", 
                            "zone-name"
                        ]
                    }, 
                    "update": {
                        "$args": [
                            "name", 
                            "resource-group", 
                            "zone-name", 
                            "if-match", 
                            "if-none-match", 
                            "metadata", 
                            "target-resource", 
                            "add", 
                            "force-string", 
                            "remove", 
                            "set"
                        ]
                    }, 
                    "add-record": {
                        "$args": [
                            "record-set-name", 
                            "resource-group", 
                            "value", 
                            "zone-name"
                        ]
                    }, 
                    "delete": {
                        "$args": [
                            "name", 
                            "resource-group", 
                            "zone-name", 
                            "if-match", 
                            "yes"
                        ]
                    }, 
                    "remove-record": {
                        "$args": [
                            "record-set-name", 
                            "resource-group", 
                            "value", 
                            "zone-name", 
                            "keep-empty-record-set"
                        ]
                    }
                }, 
                "list": {
                    "$args": [
                        "resource-group", 
                        "zone-name"
                    ]
                }, 
                "ptr": {
                    "show": {
                        "$args": [
                            "name", 
                            "resource-group", 
                            "zone-name"
                        ]
                    }, 
                    "create": {
                        "$args": [
                            "name", 
                            "resource-group", 
                            "zone-name", 
                            "if-match", 
                            "if-none-match", 
                            "metadata", 
                            "target-resource", 
                            "ttl"
                        ]
                    }, 
                    "list": {
                        "$args": [
                            "resource-group", 
                            "zone-name"
                        ]
                    }, 
                    "update": {
                        "$args": [
                            "name", 
                            "resource-group", 
                            "zone-name", 
                            "if-match", 
                            "if-none-match", 
                            "metadata", 
                            "target-resource", 
                            "add", 
                            "force-string", 
                            "remove", 
                            "set"
                        ]
                    }, 
                    "add-record": {
                        "$args": [
                            "ptrdname", 
                            "record-set-name", 
                            "resource-group", 
                            "zone-name"
                        ]
                    }, 
                    "delete": {
                        "$args": [
                            "name", 
                            "resource-group", 
                            "zone-name", 
                            "if-match", 
                            "yes"
                        ]
                    }, 
                    "remove-record": {
                        "$args": [
                            "ptrdname", 
                            "record-set-name", 
                            "resource-group", 
                            "zone-name", 
                            "keep-empty-record-set"
                        ]
                    }
                }, 
                "aaaa": {
                    "show": {
                        "$args": [
                            "name", 
                            "resource-group", 
                            "zone-name"
                        ]
                    }, 
                    "create": {
                        "$args": [
                            "name", 
                            "resource-group", 
                            "zone-name", 
                            "if-match", 
                            "if-none-match", 
                            "metadata", 
                            "target-resource", 
                            "ttl"
                        ]
                    }, 
                    "list": {
                        "$args": [
                            "resource-group", 
                            "zone-name"
                        ]
                    }, 
                    "update": {
                        "$args": [
                            "name", 
                            "resource-group", 
                            "zone-name", 
                            "if-match", 
                            "if-none-match", 
                            "metadata", 
                            "target-resource", 
                            "add", 
                            "force-string", 
                            "remove", 
                            "set"
                        ]
                    }, 
                    "add-record": {
                        "$args": [
                            "ipv6-address", 
                            "record-set-name", 
                            "resource-group", 
                            "zone-name"
                        ]
                    }, 
                    "delete": {
                        "$args": [
                            "name", 
                            "resource-group", 
                            "zone-name", 
                            "if-match", 
                            "yes"
                        ]
                    }, 
                    "remove-record": {
                        "$args": [
                            "ipv6-address", 
                            "record-set-name", 
                            "resource-group", 
                            "zone-name", 
                            "keep-empty-record-set"
                        ]
                    }
                }, 
                "cname": {
                    "show": {
                        "$args": [
                            "name", 
                            "resource-group", 
                            "zone-name"
                        ]
                    }, 
                    "create": {
                        "$args": [
                            "name", 
                            "resource-group", 
                            "zone-name", 
                            "if-match", 
                            "if-none-match", 
                            "metadata", 
                            "target-resource", 
                            "ttl"
                        ]
                    }, 
                    "list": {
                        "$args": [
                            "resource-group", 
                            "zone-name"
                        ]
                    }, 
                    "set-record": {
                        "$args": [
                            "cname", 
                            "record-set-name", 
                            "resource-group", 
                            "zone-name"
                        ]
                    }, 
                    "delete": {
                        "$args": [
                            "name", 
                            "resource-group", 
                            "zone-name", 
                            "if-match"
                        ]
                    }, 
                    "remove-record": {
                        "$args": [
                            "cname", 
                            "record-set-name", 
                            "resource-group", 
                            "zone-name", 
                            "keep-empty-record-set"
                        ]
                    }
                }, 
                "srv": {
                    "show": {
                        "$args": [
                            "name", 
                            "resource-group", 
                            "zone-name"
                        ]
                    }, 
                    "create": {
                        "$args": [
                            "name", 
                            "resource-group", 
                            "zone-name", 
                            "if-match", 
                            "if-none-match", 
                            "metadata", 
                            "target-resource", 
                            "ttl"
                        ]
                    }, 
                    "list": {
                        "$args": [
                            "resource-group", 
                            "zone-name"
                        ]
                    }, 
                    "update": {
                        "$args": [
                            "name", 
                            "resource-group", 
                            "zone-name", 
                            "if-match", 
                            "if-none-match", 
                            "metadata", 
                            "target-resource", 
                            "add", 
                            "force-string", 
                            "remove", 
                            "set"
                        ]
                    }, 
                    "add-record": {
                        "$args": [
                            "port", 
                            "priority", 
                            "record-set-name", 
                            "resource-group", 
                            "target", 
                            "weight", 
                            "zone-name"
                        ]
                    }, 
                    "delete": {
                        "$args": [
                            "name", 
                            "resource-group", 
                            "zone-name", 
                            "if-match", 
                            "yes"
                        ]
                    }, 
                    "remove-record": {
                        "$args": [
                            "port", 
                            "priority", 
                            "record-set-name", 
                            "resource-group", 
                            "target", 
                            "weight", 
                            "zone-name", 
                            "keep-empty-record-set"
                        ]
                    }
                }, 
                "caa": {
                    "show": {
                        "$args": [
                            "name", 
                            "resource-group", 
                            "zone-name"
                        ]
                    }, 
                    "create": {
                        "$args": [
                            "name", 
                            "resource-group", 
                            "zone-name", 
                            "if-match", 
                            "if-none-match", 
                            "metadata", 
                            "target-resource", 
                            "ttl"
                        ]
                    }, 
                    "list": {
                        "$args": [
                            "resource-group", 
                            "zone-name"
                        ]
                    }, 
                    "update": {
                        "$args": [
                            "name", 
                            "resource-group", 
                            "zone-name", 
                            "if-match", 
                            "if-none-match", 
                            "metadata", 
                            "target-resource", 
                            "add", 
                            "force-string", 
                            "remove", 
                            "set"
                        ]
                    }, 
                    "add-record": {
                        "$args": [
                            "flags", 
                            "record-set-name", 
                            "resource-group", 
                            "tag", 
                            "value", 
                            "zone-name"
                        ]
                    }, 
                    "delete": {
                        "$args": [
                            "name", 
                            "resource-group", 
                            "zone-name", 
                            "if-match", 
                            "yes"
                        ]
                    }, 
                    "remove-record": {
                        "$args": [
                            "flags", 
                            "record-set-name", 
                            "resource-group", 
                            "tag", 
                            "value", 
                            "zone-name", 
                            "keep-empty-record-set"
                        ]
                    }
                }, 
                "ns": {
                    "show": {
                        "$args": [
                            "name", 
                            "resource-group", 
                            "zone-name"
                        ]
                    }, 
                    "create": {
                        "$args": [
                            "name", 
                            "resource-group", 
                            "zone-name", 
                            "if-match", 
                            "if-none-match", 
                            "metadata", 
                            "target-resource", 
                            "ttl"
                        ]
                    }, 
                    "list": {
                        "$args": [
                            "resource-group", 
                            "zone-name"
                        ]
                    }, 
                    "update": {
                        "$args": [
                            "name", 
                            "resource-group", 
                            "zone-name", 
                            "if-match", 
                            "if-none-match", 
                            "metadata", 
                            "target-resource", 
                            "add", 
                            "force-string", 
                            "remove", 
                            "set"
                        ]
                    }, 
                    "add-record": {
                        "$args": [
                            "nsdname", 
                            "record-set-name", 
                            "resource-group", 
                            "zone-name"
                        ]
                    }, 
                    "delete": {
                        "$args": [
                            "name", 
                            "resource-group", 
                            "zone-name", 
                            "if-match", 
                            "yes"
                        ]
                    }, 
                    "remove-record": {
                        "$args": [
                            "nsdname", 
                            "record-set-name", 
                            "resource-group", 
                            "zone-name", 
                            "keep-empty-record-set"
                        ]
                    }
                }, 
                "mx": {
                    "show": {
                        "$args": [
                            "name", 
                            "resource-group", 
                            "zone-name"
                        ]
                    }, 
                    "create": {
                        "$args": [
                            "name", 
                            "resource-group", 
                            "zone-name", 
                            "if-match", 
                            "if-none-match", 
                            "metadata", 
                            "target-resource", 
                            "ttl"
                        ]
                    }, 
                    "list": {
                        "$args": [
                            "resource-group", 
                            "zone-name"
                        ]
                    }, 
                    "update": {
                        "$args": [
                            "name", 
                            "resource-group", 
                            "zone-name", 
                            "if-match", 
                            "if-none-match", 
                            "metadata", 
                            "target-resource", 
                            "add", 
                            "force-string", 
                            "remove", 
                            "set"
                        ]
                    }, 
                    "add-record": {
                        "$args": [
                            "exchange", 
                            "preference", 
                            "record-set-name", 
                            "resource-group", 
                            "zone-name"
                        ]
                    }, 
                    "delete": {
                        "$args": [
                            "name", 
                            "resource-group", 
                            "zone-name", 
                            "if-match", 
                            "yes"
                        ]
                    }, 
                    "remove-record": {
                        "$args": [
                            "exchange", 
                            "preference", 
                            "record-set-name", 
                            "resource-group", 
                            "zone-name", 
                            "keep-empty-record-set"
                        ]
                    }
                }
            }, 
            "zone": {
                "show": {
                    "$args": [
                        "name", 
                        "resource-group"
                    ]
                }, 
                "create": {
                    "$args": [
                        "name", 
                        "resource-group", 
                        "if-none-match", 
                        "tags", 
                        "zone-type", 
                        "registration-vnets", 
                        "resolution-vnets"
                    ]
                }, 
                "list": {
                    "$args": [
                        "resource-group"
                    ]
                }, 
                "update": {
                    "$args": [
                        "name", 
                        "resource-group", 
                        "if-match", 
                        "tags", 
                        "zone-type", 
                        "add", 
                        "force-string", 
                        "remove", 
                        "set", 
                        "registration-vnets", 
                        "resolution-vnets"
                    ]
                }, 
                "export": {
                    "$args": [
                        "name", 
                        "resource-group", 
                        "file-name"
                    ]
                }, 
                "import": {
                    "$args": [
                        "file-name", 
                        "name", 
                        "resource-group"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "name", 
                        "resource-group", 
                        "if-match", 
                        "yes"
                    ]
                }
            }
        }, 
        "ddos-protection": {
            "create": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "location", 
                    "tags", 
                    "vnets"
                ]
            }, 
            "show": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "list": {
                "$args": [
                    "resource-group"
                ]
            }, 
            "update": {
                "$args": [
                    "location", 
                    "tags", 
                    "vnets", 
                    "add", 
                    "force-string", 
                    "remove", 
                    "set", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "delete": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "vpn-connection": {
            "show": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "create": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "vnet-gateway1", 
                    "authorization-key", 
                    "enable-bgp", 
                    "location", 
                    "routing-weight", 
                    "shared-key", 
                    "tags", 
                    "use-policy-based-traffic-selectors", 
                    "validate", 
                    "express-route-circuit2", 
                    "local-gateway2", 
                    "vnet-gateway2"
                ]
            }, 
            "list": {
                "$args": [
                    "resource-group"
                ]
            }, 
            "update": {
                "$args": [
                    "enable-bgp", 
                    "routing-weight", 
                    "shared-key", 
                    "tags", 
                    "use-policy-based-traffic-selectors", 
                    "add", 
                    "force-string", 
                    "remove", 
                    "set", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "shared-key": {
                "reset": {
                    "$args": [
                        "key-length", 
                        "connection-name", 
                        "ids", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "update": {
                    "$args": [
                        "value", 
                        "id", 
                        "add", 
                        "force-string", 
                        "remove", 
                        "set", 
                        "connection-name", 
                        "ids", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "show": {
                    "$args": [
                        "connection-name", 
                        "ids", 
                        "resource-group", 
                        "subscription"
                    ]
                }
            }, 
            "ipsec-policy": {
                "add": {
                    "$args": [
                        "connection-name", 
                        "dh-group", 
                        "ike-encryption", 
                        "ike-integrity", 
                        "ipsec-encryption", 
                        "ipsec-integrity", 
                        "pfs-group", 
                        "resource-group", 
                        "sa-lifetime", 
                        "sa-max-size", 
                        "no-wait"
                    ]
                }, 
                "list": {
                    "$args": [
                        "connection-name", 
                        "resource-group"
                    ]
                }, 
                "clear": {
                    "$args": [
                        "connection-name", 
                        "resource-group", 
                        "no-wait"
                    ]
                }
            }, 
            "delete": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "application-gateway": {
            "address-pool": {
                "create": {
                    "$args": [
                        "gateway-name", 
                        "name", 
                        "resource-group", 
                        "no-wait", 
                        "servers"
                    ]
                }, 
                "show": {
                    "$args": [
                        "gateway-name", 
                        "name", 
                        "resource-group"
                    ]
                }, 
                "list": {
                    "$args": [
                        "gateway-name", 
                        "resource-group"
                    ]
                }, 
                "update": {
                    "$args": [
                        "no-wait", 
                        "servers", 
                        "add", 
                        "force-string", 
                        "remove", 
                        "set", 
                        "gateway-name", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "gateway-name", 
                        "name", 
                        "resource-group", 
                        "no-wait"
                    ]
                }
            }, 
            "auth-cert": {
                "create": {
                    "$args": [
                        "cert-file", 
                        "gateway-name", 
                        "name", 
                        "resource-group", 
                        "no-wait"
                    ]
                }, 
                "show": {
                    "$args": [
                        "gateway-name", 
                        "name", 
                        "resource-group"
                    ]
                }, 
                "list": {
                    "$args": [
                        "gateway-name", 
                        "resource-group"
                    ]
                }, 
                "update": {
                    "$args": [
                        "cert-file", 
                        "no-wait", 
                        "add", 
                        "force-string", 
                        "remove", 
                        "set", 
                        "gateway-name", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "gateway-name", 
                        "name", 
                        "resource-group", 
                        "no-wait"
                    ]
                }
            }, 
            "show": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "list": {
                "$args": [
                    "resource-group"
                ]
            }, 
            "probe": {
                "create": {
                    "$args": [
                        "gateway-name", 
                        "name", 
                        "path", 
                        "protocol", 
                        "resource-group", 
                        "host", 
                        "host-name-from-http-settings", 
                        "interval", 
                        "match-body", 
                        "match-status-codes", 
                        "min-servers", 
                        "no-wait", 
                        "threshold", 
                        "timeout"
                    ]
                }, 
                "show": {
                    "$args": [
                        "gateway-name", 
                        "name", 
                        "resource-group"
                    ]
                }, 
                "list": {
                    "$args": [
                        "gateway-name", 
                        "resource-group"
                    ]
                }, 
                "update": {
                    "$args": [
                        "host", 
                        "host-name-from-http-settings", 
                        "interval", 
                        "match-body", 
                        "match-status-codes", 
                        "min-servers", 
                        "no-wait", 
                        "path", 
                        "protocol", 
                        "threshold", 
                        "timeout", 
                        "add", 
                        "force-string", 
                        "remove", 
                        "set", 
                        "gateway-name", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "gateway-name", 
                        "name", 
                        "resource-group", 
                        "no-wait"
                    ]
                }
            }, 
            "frontend-port": {
                "create": {
                    "$args": [
                        "gateway-name", 
                        "name", 
                        "port", 
                        "resource-group", 
                        "no-wait"
                    ]
                }, 
                "show": {
                    "$args": [
                        "gateway-name", 
                        "name", 
                        "resource-group"
                    ]
                }, 
                "list": {
                    "$args": [
                        "gateway-name", 
                        "resource-group"
                    ]
                }, 
                "update": {
                    "$args": [
                        "no-wait", 
                        "port", 
                        "add", 
                        "force-string", 
                        "remove", 
                        "set", 
                        "gateway-name", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "gateway-name", 
                        "name", 
                        "resource-group", 
                        "no-wait"
                    ]
                }
            }, 
            "waf-config": {
                "list-rule-sets": {
                    "$args": [
                        "group", 
                        "type", 
                        "version"
                    ]
                }, 
                "set": {
                    "$args": [
                        "enabled", 
                        "disabled-rule-groups", 
                        "disabled-rules", 
                        "file-upload-limit", 
                        "firewall-mode", 
                        "max-request-body-size", 
                        "no-wait", 
                        "request-body-check", 
                        "rule-set-type", 
                        "rule-set-version", 
                        "gateway-name", 
                        "ids", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "show": {
                    "$args": [
                        "gateway-name", 
                        "ids", 
                        "resource-group", 
                        "subscription"
                    ]
                }
            }, 
            "redirect-config": {
                "create": {
                    "$args": [
                        "gateway-name", 
                        "name", 
                        "resource-group", 
                        "type", 
                        "include-path", 
                        "include-query-string", 
                        "no-wait", 
                        "target-listener", 
                        "target-url"
                    ]
                }, 
                "show": {
                    "$args": [
                        "gateway-name", 
                        "name", 
                        "resource-group"
                    ]
                }, 
                "list": {
                    "$args": [
                        "gateway-name", 
                        "resource-group"
                    ]
                }, 
                "update": {
                    "$args": [
                        "include-path", 
                        "include-query-string", 
                        "no-wait", 
                        "target-listener", 
                        "target-url", 
                        "type", 
                        "add", 
                        "force-string", 
                        "remove", 
                        "set", 
                        "gateway-name", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "gateway-name", 
                        "name", 
                        "resource-group", 
                        "no-wait"
                    ]
                }
            }, 
            "ssl-policy": {
                "predefined": {
                    "list": {
                        
                    }, 
                    "show": {
                        "$args": [
                            "name"
                        ]
                    }
                }, 
                "set": {
                    "$args": [
                        "cipher-suites", 
                        "disabled-ssl-protocols", 
                        "min-protocol-version", 
                        "name", 
                        "no-wait", 
                        "policy-type", 
                        "gateway-name", 
                        "ids", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "list-options": {
                    
                }, 
                "show": {
                    "$args": [
                        "gateway-name", 
                        "ids", 
                        "resource-group", 
                        "subscription"
                    ]
                }
            }, 
            "create": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "custom-error-pages", 
                    "location", 
                    "min-capacity", 
                    "no-wait", 
                    "tags", 
                    "validate", 
                    "zones", 
                    "capacity", 
                    "cert-file", 
                    "cert-password", 
                    "connection-draining-timeout", 
                    "frontend-port", 
                    "http-settings-cookie-based-affinity", 
                    "http-settings-port", 
                    "http-settings-protocol", 
                    "http2", 
                    "routing-rule-type", 
                    "servers", 
                    "sku", 
                    "private-ip-address", 
                    "public-ip-address", 
                    "public-ip-address-allocation", 
                    "subnet", 
                    "subnet-address-prefix", 
                    "vnet-address-prefix", 
                    "vnet-name"
                ]
            }, 
            "start": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "url-path-map": {
                "show": {
                    "$args": [
                        "gateway-name", 
                        "name", 
                        "resource-group"
                    ]
                }, 
                "create": {
                    "$args": [
                        "gateway-name", 
                        "name", 
                        "resource-group", 
                        "default-address-pool", 
                        "default-http-settings", 
                        "default-redirect-config", 
                        "no-wait", 
                        "paths", 
                        "address-pool", 
                        "http-settings", 
                        "redirect-config", 
                        "rule-name"
                    ]
                }, 
                "list": {
                    "$args": [
                        "gateway-name", 
                        "resource-group"
                    ]
                }, 
                "update": {
                    "$args": [
                        "default-address-pool", 
                        "default-http-settings", 
                        "default-redirect-config", 
                        "no-wait", 
                        "add", 
                        "force-string", 
                        "remove", 
                        "set", 
                        "gateway-name", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "rule": {
                    "create": {
                        "$args": [
                            "gateway-name", 
                            "name", 
                            "path-map-name", 
                            "paths", 
                            "resource-group", 
                            "address-pool", 
                            "http-settings", 
                            "no-wait", 
                            "redirect-config"
                        ]
                    }, 
                    "delete": {
                        "$args": [
                            "no-wait", 
                            "gateway-name", 
                            "ids", 
                            "name", 
                            "path-map-name", 
                            "resource-group", 
                            "subscription"
                        ]
                    }
                }, 
                "delete": {
                    "$args": [
                        "gateway-name", 
                        "name", 
                        "resource-group", 
                        "no-wait"
                    ]
                }
            }, 
            "stop": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "update": {
                "$args": [
                    "capacity", 
                    "custom-error-pages", 
                    "http2", 
                    "min-capacity", 
                    "no-wait", 
                    "sku", 
                    "tags", 
                    "add", 
                    "force-string", 
                    "remove", 
                    "set", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "root-cert": {
                "create": {
                    "$args": [
                        "gateway-name", 
                        "name", 
                        "resource-group", 
                        "cert-file", 
                        "keyvault-secret", 
                        "no-wait"
                    ]
                }, 
                "show": {
                    "$args": [
                        "gateway-name", 
                        "name", 
                        "resource-group"
                    ]
                }, 
                "list": {
                    "$args": [
                        "gateway-name", 
                        "resource-group"
                    ]
                }, 
                "update": {
                    "$args": [
                        "cert-file", 
                        "keyvault-secret", 
                        "no-wait", 
                        "add", 
                        "force-string", 
                        "remove", 
                        "set", 
                        "gateway-name", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "gateway-name", 
                        "name", 
                        "resource-group", 
                        "no-wait"
                    ]
                }
            }, 
            "wait": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription", 
                    "created", 
                    "custom", 
                    "deleted", 
                    "exists", 
                    "interval", 
                    "timeout", 
                    "updated"
                ]
            }, 
            "show-backend-health": {
                "$args": [
                    "expand", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "frontend-ip": {
                "create": {
                    "$args": [
                        "gateway-name", 
                        "name", 
                        "resource-group", 
                        "no-wait", 
                        "private-ip-address", 
                        "public-ip-address", 
                        "subnet", 
                        "vnet-name"
                    ]
                }, 
                "show": {
                    "$args": [
                        "gateway-name", 
                        "name", 
                        "resource-group"
                    ]
                }, 
                "list": {
                    "$args": [
                        "gateway-name", 
                        "resource-group"
                    ]
                }, 
                "update": {
                    "$args": [
                        "no-wait", 
                        "private-ip-address", 
                        "public-ip-address", 
                        "subnet", 
                        "vnet-name", 
                        "add", 
                        "force-string", 
                        "remove", 
                        "set", 
                        "gateway-name", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "gateway-name", 
                        "name", 
                        "resource-group", 
                        "no-wait"
                    ]
                }
            }, 
            "rule": {
                "create": {
                    "$args": [
                        "gateway-name", 
                        "name", 
                        "resource-group", 
                        "address-pool", 
                        "http-listener", 
                        "http-settings", 
                        "no-wait", 
                        "redirect-config", 
                        "rule-type", 
                        "url-path-map"
                    ]
                }, 
                "show": {
                    "$args": [
                        "gateway-name", 
                        "name", 
                        "resource-group"
                    ]
                }, 
                "list": {
                    "$args": [
                        "gateway-name", 
                        "resource-group"
                    ]
                }, 
                "update": {
                    "$args": [
                        "address-pool", 
                        "http-listener", 
                        "http-settings", 
                        "no-wait", 
                        "redirect-config", 
                        "rule-type", 
                        "url-path-map", 
                        "add", 
                        "force-string", 
                        "remove", 
                        "set", 
                        "gateway-name", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "gateway-name", 
                        "name", 
                        "resource-group", 
                        "no-wait"
                    ]
                }
            }, 
            "http-listener": {
                "create": {
                    "$args": [
                        "frontend-port", 
                        "gateway-name", 
                        "name", 
                        "resource-group", 
                        "frontend-ip", 
                        "host-name", 
                        "no-wait", 
                        "ssl-cert"
                    ]
                }, 
                "show": {
                    "$args": [
                        "gateway-name", 
                        "name", 
                        "resource-group"
                    ]
                }, 
                "list": {
                    "$args": [
                        "gateway-name", 
                        "resource-group"
                    ]
                }, 
                "update": {
                    "$args": [
                        "frontend-ip", 
                        "frontend-port", 
                        "host-name", 
                        "no-wait", 
                        "ssl-cert", 
                        "add", 
                        "force-string", 
                        "remove", 
                        "set", 
                        "gateway-name", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "gateway-name", 
                        "name", 
                        "resource-group", 
                        "no-wait"
                    ]
                }
            }, 
            "http-settings": {
                "create": {
                    "$args": [
                        "gateway-name", 
                        "name", 
                        "port", 
                        "resource-group", 
                        "affinity-cookie-name", 
                        "auth-certs", 
                        "connection-draining-timeout", 
                        "cookie-based-affinity", 
                        "enable-probe", 
                        "host-name", 
                        "host-name-from-backend-pool", 
                        "no-wait", 
                        "path", 
                        "probe", 
                        "protocol", 
                        "timeout"
                    ]
                }, 
                "show": {
                    "$args": [
                        "gateway-name", 
                        "name", 
                        "resource-group"
                    ]
                }, 
                "list": {
                    "$args": [
                        "gateway-name", 
                        "resource-group"
                    ]
                }, 
                "update": {
                    "$args": [
                        "affinity-cookie-name", 
                        "auth-certs", 
                        "connection-draining-timeout", 
                        "cookie-based-affinity", 
                        "enable-probe", 
                        "host-name", 
                        "host-name-from-backend-pool", 
                        "no-wait", 
                        "path", 
                        "port", 
                        "probe", 
                        "protocol", 
                        "timeout", 
                        "add", 
                        "force-string", 
                        "remove", 
                        "set", 
                        "gateway-name", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "gateway-name", 
                        "name", 
                        "resource-group", 
                        "no-wait"
                    ]
                }
            }, 
            "ssl-cert": {
                "create": {
                    "$args": [
                        "cert-file", 
                        "cert-password", 
                        "gateway-name", 
                        "name", 
                        "resource-group", 
                        "no-wait"
                    ]
                }, 
                "show": {
                    "$args": [
                        "gateway-name", 
                        "name", 
                        "resource-group"
                    ]
                }, 
                "list": {
                    "$args": [
                        "gateway-name", 
                        "resource-group"
                    ]
                }, 
                "update": {
                    "$args": [
                        "cert-file", 
                        "cert-password", 
                        "no-wait", 
                        "add", 
                        "force-string", 
                        "remove", 
                        "set", 
                        "gateway-name", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "gateway-name", 
                        "name", 
                        "resource-group", 
                        "no-wait"
                    ]
                }
            }, 
            "delete": {
                "$args": [
                    "no-wait", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "route-filter": {
            "show": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "expand"
                ]
            }, 
            "create": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "location", 
                    "tags"
                ]
            }, 
            "list": {
                "$args": [
                    "resource-group"
                ]
            }, 
            "update": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "add", 
                    "force-string", 
                    "remove", 
                    "set"
                ]
            }, 
            "rule": {
                "show": {
                    "$args": [
                        "filter-name", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "create": {
                    "$args": [
                        "access", 
                        "communities", 
                        "filter-name", 
                        "name", 
                        "resource-group", 
                        "location"
                    ]
                }, 
                "list": {
                    "$args": [
                        "filter-name", 
                        "resource-group"
                    ]
                }, 
                "update": {
                    "$args": [
                        "add", 
                        "force-string", 
                        "remove", 
                        "set", 
                        "filter-name", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "list-service-communities": {
                    
                }, 
                "delete": {
                    "$args": [
                        "filter-name", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }
            }, 
            "delete": {
                "$args": [
                    "name", 
                    "resource-group"
                ]
            }
        }, 
        "watcher": {
            "test-ip-flow": {
                "$args": [
                    "direction", 
                    "local", 
                    "protocol", 
                    "remote", 
                    "vm", 
                    "nic", 
                    "resource-group"
                ]
            }, 
            "configure": {
                "$args": [
                    "locations", 
                    "enabled", 
                    "resource-group", 
                    "tags"
                ]
            }, 
            "show-topology": {
                "$args": [
                    "location", 
                    "resource-group", 
                    "subnet", 
                    "vnet"
                ]
            }, 
            "connection-monitor": {
                "show": {
                    "$args": [
                        "location", 
                        "name"
                    ]
                }, 
                "stop": {
                    "$args": [
                        "location", 
                        "name"
                    ]
                }, 
                "create": {
                    "$args": [
                        "name", 
                        "source-resource", 
                        "do-not-start", 
                        "monitoring-interval", 
                        "resource-group", 
                        "source-port", 
                        "tags", 
                        "dest-address", 
                        "dest-port", 
                        "dest-resource"
                    ]
                }, 
                "list": {
                    "$args": [
                        "location"
                    ]
                }, 
                "start": {
                    "$args": [
                        "location", 
                        "name"
                    ]
                }, 
                "query": {
                    "$args": [
                        "location", 
                        "name"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "location", 
                        "name"
                    ]
                }
            }, 
            "list": {
                
            }, 
            "flow-log": {
                "configure": {
                    "$args": [
                        "nsg", 
                        "enabled", 
                        "resource-group", 
                        "retention", 
                        "storage-account"
                    ]
                }, 
                "show": {
                    "$args": [
                        "nsg", 
                        "resource-group"
                    ]
                }
            }, 
            "show-next-hop": {
                "$args": [
                    "dest-ip", 
                    "resource-group", 
                    "source-ip", 
                    "vm", 
                    "nic"
                ]
            }, 
            "packet-capture": {
                "show": {
                    "$args": [
                        "location", 
                        "name"
                    ]
                }, 
                "show-status": {
                    "$args": [
                        "location", 
                        "name"
                    ]
                }, 
                "create": {
                    "$args": [
                        "name", 
                        "resource-group", 
                        "vm", 
                        "capture-limit", 
                        "capture-size", 
                        "filters", 
                        "time-limit", 
                        "file-path", 
                        "storage-account", 
                        "storage-path"
                    ]
                }, 
                "stop": {
                    "$args": [
                        "location", 
                        "name"
                    ]
                }, 
                "list": {
                    "$args": [
                        "location"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "location", 
                        "name"
                    ]
                }
            }, 
            "troubleshooting": {
                "start": {
                    "$args": [
                        "resource", 
                        "storage-account", 
                        "storage-path", 
                        "no-wait", 
                        "resource-group", 
                        "resource-type"
                    ]
                }, 
                "show": {
                    "$args": [
                        "resource", 
                        "resource-group", 
                        "resource-type"
                    ]
                }
            }, 
            "run-configuration-diagnostic": {
                "$args": [
                    "destination", 
                    "direction", 
                    "port", 
                    "protocol", 
                    "queries", 
                    "source", 
                    "resource", 
                    "parent", 
                    "resource-group", 
                    "resource-type"
                ]
            }, 
            "test-connectivity": {
                "$args": [
                    "source-resource", 
                    "protocol", 
                    "resource-group", 
                    "source-port", 
                    "dest-address", 
                    "dest-port", 
                    "dest-resource", 
                    "headers", 
                    "method", 
                    "valid-status-codes"
                ]
            }, 
            "show-security-group-view": {
                "$args": [
                    "resource-group", 
                    "vm"
                ]
            }
        }, 
        "local-gateway": {
            "show": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "create": {
                "$args": [
                    "gateway-ip-address", 
                    "name", 
                    "resource-group", 
                    "local-address-prefixes", 
                    "location", 
                    "no-wait", 
                    "tags", 
                    "asn", 
                    "bgp-peering-address", 
                    "peer-weight"
                ]
            }, 
            "list": {
                "$args": [
                    "resource-group"
                ]
            }, 
            "update": {
                "$args": [
                    "gateway-ip-address", 
                    "local-address-prefixes", 
                    "no-wait", 
                    "tags", 
                    "asn", 
                    "bgp-peering-address", 
                    "peer-weight", 
                    "add", 
                    "force-string", 
                    "remove", 
                    "set", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "delete": {
                "$args": [
                    "no-wait", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "wait": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription", 
                    "created", 
                    "custom", 
                    "deleted", 
                    "exists", 
                    "interval", 
                    "timeout", 
                    "updated"
                ]
            }
        }, 
        "service-endpoint": {
            "policy": {
                "create": {
                    "$args": [
                        "name", 
                        "resource-group", 
                        "location", 
                        "tags"
                    ]
                }, 
                "show": {
                    "$args": [
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "list": {
                    "$args": [
                        "resource-group"
                    ]
                }, 
                "update": {
                    "$args": [
                        "tags", 
                        "add", 
                        "force-string", 
                        "remove", 
                        "set", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }
            }, 
            "policy-definition": {
                "create": {
                    "$args": [
                        "name", 
                        "policy-name", 
                        "resource-group", 
                        "service", 
                        "service-resources", 
                        "description"
                    ]
                }, 
                "show": {
                    "$args": [
                        "ids", 
                        "name", 
                        "policy-name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "list": {
                    "$args": [
                        "policy-name", 
                        "resource-group"
                    ]
                }, 
                "update": {
                    "$args": [
                        "description", 
                        "service", 
                        "service-resources", 
                        "add", 
                        "force-string", 
                        "remove", 
                        "set", 
                        "ids", 
                        "name", 
                        "policy-name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "ids", 
                        "name", 
                        "policy-name", 
                        "resource-group", 
                        "subscription"
                    ]
                }
            }, 
            "list": {
                "$args": [
                    "location"
                ]
            }
        }
    }, 
    "deployment": {
        "show": {
            "$args": [
                "name"
            ]
        }, 
        "create": {
            "$args": [
                "location", 
                "name", 
                "no-wait", 
                "parameters", 
                "template-file", 
                "template-uri"
            ]
        }, 
        "list": {
            "$args": [
                "filter", 
                "top"
            ]
        }, 
        "export": {
            "$args": [
                "name"
            ]
        }, 
        "operation": {
            "list": {
                "$args": [
                    "name", 
                    "top"
                ]
            }, 
            "show": {
                "$args": [
                    "name", 
                    "operation-ids"
                ]
            }
        }, 
        "wait": {
            "$args": [
                "name", 
                "created", 
                "custom", 
                "deleted", 
                "exists", 
                "interval", 
                "timeout", 
                "updated"
            ]
        }, 
        "validate": {
            "$args": [
                "location", 
                "parameters", 
                "template-file", 
                "template-uri"
            ]
        }, 
        "delete": {
            "$args": [
                "name", 
                "no-wait"
            ]
        }
    }, 
    "group": {
        "exists": {
            "$args": [
                "name"
            ]
        }, 
        "show": {
            "$args": [
                "name"
            ]
        }, 
        "lock": {
            "create": {
                "$args": [
                    "lock-type", 
                    "name", 
                    "resource-group", 
                    "notes"
                ]
            }, 
            "show": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group"
                ]
            }, 
            "list": {
                "$args": [
                    "filter-string", 
                    "resource-group"
                ]
            }, 
            "update": {
                "$args": [
                    "ids", 
                    "lock-type", 
                    "name", 
                    "notes", 
                    "resource-group"
                ]
            }, 
            "delete": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group"
                ]
            }
        }, 
        "create": {
            "$args": [
                "location", 
                "name", 
                "tags"
            ]
        }, 
        "list": {
            "$args": [
                "tag"
            ]
        }, 
        "update": {
            "$args": [
                "name", 
                "tags", 
                "add", 
                "force-string", 
                "remove", 
                "set"
            ]
        }, 
        "export": {
            "$args": [
                "name", 
                "include-comments", 
                "include-parameter-default-value"
            ]
        }, 
        "deployment": {
            "show": {
                "$args": [
                    "name", 
                    "resource-group"
                ]
            }, 
            "create": {
                "$args": [
                    "resource-group", 
                    "mode", 
                    "name", 
                    "no-wait", 
                    "parameters", 
                    "rollback-on-error", 
                    "template-file", 
                    "template-uri"
                ]
            }, 
            "list": {
                "$args": [
                    "resource-group", 
                    "filter", 
                    "top"
                ]
            }, 
            "export": {
                "$args": [
                    "name", 
                    "resource-group"
                ]
            }, 
            "operation": {
                "list": {
                    "$args": [
                        "name", 
                        "resource-group", 
                        "top"
                    ]
                }, 
                "show": {
                    "$args": [
                        "name", 
                        "operation-ids", 
                        "resource-group"
                    ]
                }
            }, 
            "wait": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "created", 
                    "custom", 
                    "deleted", 
                    "exists", 
                    "interval", 
                    "timeout", 
                    "updated"
                ]
            }, 
            "validate": {
                "$args": [
                    "resource-group", 
                    "mode", 
                    "parameters", 
                    "rollback-on-error", 
                    "template-file", 
                    "template-uri"
                ]
            }, 
            "delete": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "no-wait"
                ]
            }
        }, 
        "wait": {
            "$args": [
                "name", 
                "created", 
                "custom", 
                "deleted", 
                "exists", 
                "interval", 
                "timeout", 
                "updated"
            ]
        }, 
        "delete": {
            "$args": [
                "name", 
                "no-wait", 
                "yes"
            ]
        }
    }, 
    "cosmosdb": {
        "check-name-exists": {
            "$args": [
                "ids", 
                "name", 
                "subscription"
            ]
        }, 
        "regenerate-key": {
            "$args": [
                "key-kind", 
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "database": {
            "create": {
                "$args": [
                    "db-name", 
                    "key", 
                    "name", 
                    "resource-group-name", 
                    "url-connection"
                ]
            }, 
            "show": {
                "$args": [
                    "db-name", 
                    "key", 
                    "name", 
                    "resource-group-name", 
                    "url-connection"
                ]
            }, 
            "list": {
                "$args": [
                    "key", 
                    "name", 
                    "resource-group-name", 
                    "url-connection"
                ]
            }, 
            "exists": {
                "$args": [
                    "db-name", 
                    "key", 
                    "name", 
                    "resource-group-name", 
                    "url-connection"
                ]
            }, 
            "delete": {
                "$args": [
                    "db-name", 
                    "key", 
                    "name", 
                    "resource-group-name", 
                    "url-connection"
                ]
            }
        }, 
        "failover-priority-change": {
            "$args": [
                "failover-policies", 
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "list-keys": {
            "$args": [
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "create": {
            "$args": [
                "name", 
                "resource-group", 
                "capabilities", 
                "default-consistency-level", 
                "enable-automatic-failover", 
                "enable-multiple-write-locations", 
                "enable-virtual-network", 
                "ip-range-filter", 
                "kind", 
                "locations", 
                "max-interval", 
                "max-staleness-prefix", 
                "tags", 
                "virtual-network-rules"
            ]
        }, 
        "list-connection-strings": {
            "$args": [
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "list": {
            "$args": [
                "resource-group"
            ]
        }, 
        "update": {
            "$args": [
                "capabilities", 
                "default-consistency-level", 
                "enable-automatic-failover", 
                "enable-virtual-network", 
                "ip-range-filter", 
                "locations", 
                "max-interval", 
                "max-staleness-prefix", 
                "tags", 
                "virtual-network-rules", 
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "collection": {
            "exists": {
                "$args": [
                    "collection-name", 
                    "db-name", 
                    "key", 
                    "name", 
                    "resource-group-name", 
                    "url-connection"
                ]
            }, 
            "show": {
                "$args": [
                    "collection-name", 
                    "db-name", 
                    "key", 
                    "name", 
                    "resource-group-name", 
                    "url-connection"
                ]
            }, 
            "create": {
                "$args": [
                    "collection-name", 
                    "db-name", 
                    "default-ttl", 
                    "indexing-policy", 
                    "partition-key-path", 
                    "throughput", 
                    "key", 
                    "name", 
                    "resource-group-name", 
                    "url-connection"
                ]
            }, 
            "list": {
                "$args": [
                    "db-name", 
                    "key", 
                    "name", 
                    "resource-group-name", 
                    "url-connection"
                ]
            }, 
            "update": {
                "$args": [
                    "collection-name", 
                    "db-name", 
                    "default-ttl", 
                    "indexing-policy", 
                    "throughput", 
                    "key", 
                    "name", 
                    "resource-group-name", 
                    "url-connection"
                ]
            }, 
            "delete": {
                "$args": [
                    "collection-name", 
                    "db-name", 
                    "key", 
                    "name", 
                    "resource-group-name", 
                    "url-connection"
                ]
            }
        }, 
        "show": {
            "$args": [
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "list-read-only-keys": {
            "$args": [
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "delete": {
            "$args": [
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }
    }, 
    "mariadb": {
        "server-logs": {
            "download": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "server-name"
                ]
            }, 
            "list": {
                "$args": [
                    "resource-group", 
                    "server-name", 
                    "file-last-written", 
                    "filename-contains", 
                    "max-file-size"
                ]
            }
        }, 
        "db": {
            "create": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "server-name", 
                    "charset", 
                    "collation"
                ]
            }, 
            "show": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "server-name"
                ]
            }, 
            "list": {
                "$args": [
                    "resource-group", 
                    "server-name"
                ]
            }, 
            "delete": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "server-name", 
                    "yes"
                ]
            }
        }, 
        "server": {
            "restore": {
                "$args": [
                    "restore-point-in-time", 
                    "source-server", 
                    "no-wait", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "show": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "georestore": {
                "$args": [
                    "location", 
                    "source-server", 
                    "backup-retention", 
                    "geo-redundant-backup", 
                    "no-wait", 
                    "sku-name", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "create": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "sku-name", 
                    "backup-retention", 
                    "geo-redundant-backup", 
                    "location", 
                    "ssl-enforcement", 
                    "storage-size", 
                    "tags", 
                    "version", 
                    "admin-password"
                ]
            }, 
            "vnet-rule": {
                "create": {
                    "$args": [
                        "name", 
                        "resource-group", 
                        "server-name", 
                        "subnet", 
                        "ignore-missing-endpoint", 
                        "vnet-name"
                    ]
                }, 
                "show": {
                    "$args": [
                        "ids", 
                        "name", 
                        "resource-group", 
                        "server-name", 
                        "subscription"
                    ]
                }, 
                "list": {
                    "$args": [
                        "ids", 
                        "resource-group", 
                        "server-name", 
                        "subscription"
                    ]
                }, 
                "update": {
                    "$args": [
                        "subnet", 
                        "ignore-missing-endpoint", 
                        "vnet-name", 
                        "add", 
                        "force-string", 
                        "remove", 
                        "set", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "server-name", 
                        "subscription"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "ids", 
                        "name", 
                        "resource-group", 
                        "server-name", 
                        "subscription"
                    ]
                }
            }, 
            "list": {
                "$args": [
                    "resource-group"
                ]
            }, 
            "update": {
                "$args": [
                    "admin-password", 
                    "backup-retention", 
                    "sku-name", 
                    "ssl-enforcement", 
                    "storage-size", 
                    "tags", 
                    "add", 
                    "force-string", 
                    "remove", 
                    "set", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "wait": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription", 
                    "custom", 
                    "exists", 
                    "interval", 
                    "timeout"
                ]
            }, 
            "configuration": {
                "set": {
                    "$args": [
                        "value", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "server-name", 
                        "subscription"
                    ]
                }, 
                "list": {
                    "$args": [
                        "ids", 
                        "resource-group", 
                        "server-name", 
                        "subscription"
                    ]
                }, 
                "show": {
                    "$args": [
                        "ids", 
                        "name", 
                        "resource-group", 
                        "server-name", 
                        "subscription"
                    ]
                }
            }, 
            "firewall-rule": {
                "create": {
                    "$args": [
                        "end-ip-address", 
                        "name", 
                        "resource-group", 
                        "server-name", 
                        "start-ip-address"
                    ]
                }, 
                "show": {
                    "$args": [
                        "ids", 
                        "name", 
                        "resource-group", 
                        "server-name", 
                        "subscription"
                    ]
                }, 
                "list": {
                    "$args": [
                        "ids", 
                        "resource-group", 
                        "server-name", 
                        "subscription"
                    ]
                }, 
                "update": {
                    "$args": [
                        "end-ip-address", 
                        "start-ip-address", 
                        "add", 
                        "force-string", 
                        "remove", 
                        "set", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "server-name", 
                        "subscription"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "yes", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "server-name", 
                        "subscription"
                    ]
                }
            }, 
            "delete": {
                "$args": [
                    "yes", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }
    }, 
    "identity": {
        "list-operations": {
            
        }, 
        "create": {
            "$args": [
                "name", 
                "resource-group", 
                "location", 
                "tags"
            ]
        }, 
        "show": {
            "$args": [
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "list": {
            "$args": [
                "resource-group"
            ]
        }, 
        "delete": {
            "$args": [
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }
    }, 
    "monitor": {
        "diagnostic-settings": {
            "show": {
                "$args": [
                    "name", 
                    "resource", 
                    "resource-group", 
                    "resource-namespace", 
                    "resource-parent", 
                    "resource-type"
                ]
            }, 
            "create": {
                "$args": [
                    "name", 
                    "event-hub", 
                    "event-hub-rule", 
                    "logs", 
                    "metrics", 
                    "storage-account", 
                    "workspace", 
                    "resource", 
                    "resource-group", 
                    "resource-namespace", 
                    "resource-parent", 
                    "resource-type"
                ]
            }, 
            "list": {
                "$args": [
                    "resource", 
                    "resource-group", 
                    "resource-namespace", 
                    "resource-parent", 
                    "resource-type"
                ]
            }, 
            "update": {
                "$args": [
                    "name", 
                    "add", 
                    "force-string", 
                    "remove", 
                    "set", 
                    "resource", 
                    "resource-group", 
                    "resource-namespace", 
                    "resource-parent", 
                    "resource-type"
                ]
            }, 
            "categories": {
                "list": {
                    "$args": [
                        "resource", 
                        "resource-group", 
                        "resource-namespace", 
                        "resource-parent", 
                        "resource-type"
                    ]
                }, 
                "show": {
                    "$args": [
                        "name", 
                        "resource", 
                        "resource-group", 
                        "resource-namespace", 
                        "resource-parent", 
                        "resource-type"
                    ]
                }
            }, 
            "delete": {
                "$args": [
                    "name", 
                    "resource", 
                    "resource-group", 
                    "resource-namespace", 
                    "resource-parent", 
                    "resource-type"
                ]
            }
        }, 
        "autoscale": {
            "profile": {
                "create": {
                    "$args": [
                        "autoscale-name", 
                        "name", 
                        "resource-group", 
                        "copy-rules", 
                        "count", 
                        "max-count", 
                        "min-count", 
                        "timezone", 
                        "end", 
                        "recurrence", 
                        "start"
                    ]
                }, 
                "show": {
                    "$args": [
                        "autoscale-name", 
                        "name", 
                        "resource-group"
                    ]
                }, 
                "list": {
                    "$args": [
                        "autoscale-name", 
                        "resource-group"
                    ]
                }, 
                "list-timezones": {
                    "$args": [
                        "offset", 
                        "search-query"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "autoscale-name", 
                        "name", 
                        "resource-group"
                    ]
                }
            }, 
            "show": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "create": {
                "$args": [
                    "disabled", 
                    "location", 
                    "name", 
                    "tags", 
                    "count", 
                    "max-count", 
                    "min-count", 
                    "action", 
                    "email-administrator", 
                    "email-coadministrators", 
                    "resource", 
                    "resource-group", 
                    "resource-namespace", 
                    "resource-parent", 
                    "resource-type"
                ]
            }, 
            "list": {
                "$args": [
                    "resource-group"
                ]
            }, 
            "update": {
                "$args": [
                    "enabled", 
                    "tags", 
                    "add", 
                    "force-string", 
                    "remove", 
                    "set", 
                    "count", 
                    "max-count", 
                    "min-count", 
                    "add-action", 
                    "email-administrator", 
                    "email-coadministrators", 
                    "remove-action", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "rule": {
                "create": {
                    "$args": [
                        "autoscale-name", 
                        "condition", 
                        "scale", 
                        "cooldown", 
                        "profile-name", 
                        "timegrain", 
                        "resource", 
                        "resource-group", 
                        "resource-namespace", 
                        "resource-parent", 
                        "resource-type"
                    ]
                }, 
                "copy": {
                    "$args": [
                        "autoscale-name", 
                        "dest-schedule", 
                        "index", 
                        "resource-group", 
                        "source-schedule"
                    ]
                }, 
                "list": {
                    "$args": [
                        "autoscale-name", 
                        "resource-group", 
                        "profile-name"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "autoscale-name", 
                        "index", 
                        "resource-group", 
                        "profile-name"
                    ]
                }
            }, 
            "delete": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "metrics": {
            "list-definitions": {
                "$args": [
                    "namespace", 
                    "resource", 
                    "resource-group", 
                    "resource-namespace", 
                    "resource-parent", 
                    "resource-type"
                ]
            }, 
            "list": {
                "$args": [
                    "aggregation", 
                    "dimension", 
                    "filter", 
                    "metadata", 
                    "metrics", 
                    "namespace", 
                    "orderby", 
                    "top", 
                    "resource", 
                    "resource-group", 
                    "resource-namespace", 
                    "resource-parent", 
                    "resource-type", 
                    "end-time", 
                    "interval", 
                    "offset", 
                    "start-time"
                ]
            }, 
            "alert": {
                "create": {
                    "$args": [
                        "condition", 
                        "description", 
                        "name", 
                        "resource-group", 
                        "scopes", 
                        "action", 
                        "auto-mitigate", 
                        "disabled", 
                        "evaluation-frequency", 
                        "severity", 
                        "tags", 
                        "window-size"
                    ]
                }, 
                "show": {
                    "$args": [
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "list": {
                    "$args": [
                        "resource-group"
                    ]
                }, 
                "update": {
                    "$args": [
                        "auto-mitigate", 
                        "description", 
                        "enabled", 
                        "evaluation-frequency", 
                        "scopes", 
                        "severity", 
                        "tags", 
                        "window-size", 
                        "add-action", 
                        "remove-actions", 
                        "add-condition", 
                        "remove-conditions", 
                        "add", 
                        "force-string", 
                        "remove", 
                        "set", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }
            }
        }, 
        "action-group": {
            "show": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "create": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "short-name", 
                    "tags", 
                    "action"
                ]
            }, 
            "list": {
                "$args": [
                    "resource-group"
                ]
            }, 
            "update": {
                "$args": [
                    "short-name", 
                    "tags", 
                    "add-action", 
                    "remove-action", 
                    "add", 
                    "force-string", 
                    "remove", 
                    "set", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "enable-receiver": {
                "$args": [
                    "name", 
                    "action-group", 
                    "ids", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "delete": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "log-profiles": {
            "create": {
                "$args": [
                    "categories", 
                    "location", 
                    "locations", 
                    "name", 
                    "service-bus-rule-id", 
                    "storage-account-id", 
                    "tags", 
                    "days", 
                    "enabled"
                ]
            }, 
            "show": {
                "$args": [
                    "name"
                ]
            }, 
            "list": {
                
            }, 
            "update": {
                "$args": [
                    "name", 
                    "add", 
                    "force-string", 
                    "remove", 
                    "set"
                ]
            }, 
            "delete": {
                "$args": [
                    "name"
                ]
            }
        }, 
        "activity-log": {
            "list": {
                "$args": [
                    "max-events", 
                    "select", 
                    "caller", 
                    "correlation-id", 
                    "namespace", 
                    "resource-group", 
                    "resource-id", 
                    "status", 
                    "end-time", 
                    "offset", 
                    "start-time"
                ]
            }, 
            "list-categories": {
                
            }, 
            "alert": {
                "show": {
                    "$args": [
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "create": {
                    "$args": [
                        "name", 
                        "resource-group", 
                        "action-group", 
                        "condition", 
                        "description", 
                        "disable", 
                        "scope", 
                        "tags", 
                        "webhook-properties"
                    ]
                }, 
                "list": {
                    "$args": [
                        "resource-group"
                    ]
                }, 
                "update": {
                    "$args": [
                        "condition", 
                        "description", 
                        "enabled", 
                        "tags", 
                        "add", 
                        "force-string", 
                        "remove", 
                        "set", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "action-group": {
                    "add": {
                        "$args": [
                            "action-group", 
                            "reset", 
                            "strict", 
                            "webhook-properties", 
                            "ids", 
                            "name", 
                            "resource-group", 
                            "subscription"
                        ]
                    }, 
                    "remove": {
                        "$args": [
                            "action-group", 
                            "ids", 
                            "name", 
                            "resource-group", 
                            "subscription"
                        ]
                    }
                }, 
                "scope": {
                    "add": {
                        "$args": [
                            "scope", 
                            "reset", 
                            "ids", 
                            "name", 
                            "resource-group", 
                            "subscription"
                        ]
                    }, 
                    "remove": {
                        "$args": [
                            "scope", 
                            "ids", 
                            "name", 
                            "resource-group", 
                            "subscription"
                        ]
                    }
                }, 
                "delete": {
                    "$args": [
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }
            }
        }
    }, 
    "appservice": {
        "plan": {
            "create": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "hyper-v", 
                    "is-linux", 
                    "location", 
                    "number-of-workers", 
                    "sku", 
                    "tags"
                ]
            }, 
            "show": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "list": {
                "$args": [
                    "resource-group"
                ]
            }, 
            "update": {
                "$args": [
                    "admin-site-name", 
                    "number-of-workers", 
                    "sku", 
                    "add", 
                    "force-string", 
                    "remove", 
                    "set", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "delete": {
                "$args": [
                    "yes", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "list-locations": {
            "$args": [
                "sku", 
                "linux-workers-enabled"
            ]
        }
    }, 
    "account": {
        "get-access-token": {
            "$args": [
                "resource", 
                "subscription"
            ]
        }, 
        "show": {
            "$args": [
                "sdk-auth", 
                "subscription"
            ]
        }, 
        "lock": {
            "create": {
                "$args": [
                    "lock-type", 
                    "name", 
                    "notes"
                ]
            }, 
            "show": {
                "$args": [
                    "ids", 
                    "name"
                ]
            }, 
            "list": {
                "$args": [
                    "filter-string"
                ]
            }, 
            "update": {
                "$args": [
                    "ids", 
                    "lock-type", 
                    "name", 
                    "notes"
                ]
            }, 
            "delete": {
                "$args": [
                    "ids", 
                    "name"
                ]
            }
        }, 
        "clear": {
            
        }, 
        "list": {
            "$args": [
                "all", 
                "refresh"
            ]
        }, 
        "set": {
            "$args": [
                "subscription"
            ]
        }, 
        "list-locations": {
            
        }, 
        "management-group": {
            "show": {
                "$args": [
                    "name", 
                    "expand", 
                    "recurse"
                ]
            }, 
            "create": {
                "$args": [
                    "name", 
                    "display-name", 
                    "parent"
                ]
            }, 
            "list": {
                
            }, 
            "update": {
                "$args": [
                    "name", 
                    "display-name", 
                    "parent", 
                    "add", 
                    "force-string", 
                    "remove", 
                    "set"
                ]
            }, 
            "subscription": {
                "add": {
                    "$args": [
                        "name", 
                        "subscription"
                    ]
                }, 
                "remove": {
                    "$args": [
                        "name", 
                        "subscription"
                    ]
                }
            }, 
            "delete": {
                "$args": [
                    "name"
                ]
            }
        }
    }, 
    "resource": {
        "show": {
            "$args": [
                "include-response-body", 
                "api-version", 
                "ids", 
                "name", 
                "namespace", 
                "parent", 
                "resource-group", 
                "resource-type"
            ]
        }, 
        "lock": {
            "create": {
                "$args": [
                    "lock-type", 
                    "name", 
                    "notes", 
                    "resource-group", 
                    "namespace", 
                    "parent", 
                    "resource", 
                    "resource-type"
                ]
            }, 
            "show": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "namespace", 
                    "parent", 
                    "resource", 
                    "resource-type"
                ]
            }, 
            "list": {
                "$args": [
                    "filter-string", 
                    "resource-group", 
                    "namespace", 
                    "parent", 
                    "resource", 
                    "resource-type"
                ]
            }, 
            "update": {
                "$args": [
                    "ids", 
                    "lock-type", 
                    "name", 
                    "notes", 
                    "resource-group", 
                    "namespace", 
                    "parent", 
                    "resource", 
                    "resource-type"
                ]
            }, 
            "delete": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "namespace", 
                    "parent", 
                    "resource", 
                    "resource-type"
                ]
            }
        }, 
        "create": {
            "$args": [
                "properties", 
                "id", 
                "is-full-object", 
                "location", 
                "api-version", 
                "name", 
                "namespace", 
                "parent", 
                "resource-group", 
                "resource-type"
            ]
        }, 
        "move": {
            "$args": [
                "destination-group", 
                "ids", 
                "destination-subscription-id"
            ]
        }, 
        "list": {
            "$args": [
                "location", 
                "name", 
                "tag", 
                "namespace", 
                "resource-group", 
                "resource-type"
            ]
        }, 
        "update": {
            "$args": [
                "include-response-body", 
                "add", 
                "force-string", 
                "remove", 
                "set", 
                "api-version", 
                "ids", 
                "name", 
                "namespace", 
                "parent", 
                "resource-group", 
                "resource-type"
            ]
        }, 
        "invoke-action": {
            "$args": [
                "action", 
                "request-body", 
                "api-version", 
                "ids", 
                "name", 
                "namespace", 
                "parent", 
                "resource-group", 
                "resource-type"
            ]
        }, 
        "tag": {
            "$args": [
                "tags", 
                "api-version", 
                "ids", 
                "name", 
                "namespace", 
                "parent", 
                "resource-group", 
                "resource-type"
            ]
        }, 
        "link": {
            "create": {
                "$args": [
                    "target-id", 
                    "notes"
                ]
            }, 
            "show": {
                "$args": [
                    "link-id"
                ]
            }, 
            "list": {
                "$args": [
                    "filter-string", 
                    "scope"
                ]
            }, 
            "update": {
                "$args": [
                    "notes", 
                    "target-id"
                ]
            }, 
            "delete": {
                "$args": [
                    "link-id"
                ]
            }
        }, 
        "delete": {
            "$args": [
                "api-version", 
                "ids", 
                "name", 
                "namespace", 
                "parent", 
                "resource-group", 
                "resource-type"
            ]
        }
    }, 
    "billing": {
        "enrollment-account": {
            "list": {
                
            }, 
            "show": {
                "$args": [
                    "name"
                ]
            }
        }, 
        "period": {
            "list": {
                "$args": [
                    "filter", 
                    "skiptoken", 
                    "top"
                ]
            }, 
            "show": {
                "$args": [
                    "name"
                ]
            }
        }, 
        "invoice": {
            "list": {
                "$args": [
                    "generate-download-url"
                ]
            }, 
            "show": {
                "$args": [
                    "name"
                ]
            }
        }
    }, 
    "extension": {
        "show": {
            "$args": [
                "name"
            ]
        }, 
        "list": {
            
        }, 
        "update": {
            "$args": [
                "name", 
                "pip-extra-index-urls", 
                "pip-proxy"
            ]
        }, 
        "remove": {
            "$args": [
                "name"
            ]
        }, 
        "add": {
            "$args": [
                "name", 
                "source", 
                "yes", 
                "pip-extra-index-urls", 
                "pip-proxy"
            ]
        }, 
        "list-available": {
            "$args": [
                "show-details"
            ]
        }
    }, 
    "aks": {
        "get-versions": {
            "$args": [
                "location"
            ]
        }, 
        "scale": {
            "$args": [
                "name", 
                "node-count", 
                "resource-group", 
                "no-wait", 
                "nodepool-name"
            ]
        }, 
        "get-upgrades": {
            "$args": [
                "name", 
                "resource-group"
            ]
        }, 
        "install-connector": {
            "$args": [
                "name", 
                "resource-group", 
                "aci-resource-group", 
                "chart-url", 
                "client-secret", 
                "connector-name", 
                "image-tag", 
                "location", 
                "os-type", 
                "service-principal"
            ]
        }, 
        "show": {
            "$args": [
                "name", 
                "resource-group"
            ]
        }, 
        "browse": {
            "$args": [
                "name", 
                "resource-group", 
                "disable-browser", 
                "listen-port"
            ]
        }, 
        "create": {
            "$args": [
                "name", 
                "resource-group", 
                "aad-client-app-id", 
                "aad-server-app-id", 
                "aad-server-app-secret", 
                "aad-tenant-id", 
                "admin-username", 
                "client-secret", 
                "disable-rbac", 
                "dns-name-prefix", 
                "dns-service-ip", 
                "docker-bridge-address", 
                "enable-addons", 
                "generate-ssh-keys", 
                "kubernetes-version", 
                "location", 
                "max-pods", 
                "network-plugin", 
                "no-ssh-key", 
                "no-wait", 
                "node-count", 
                "node-osdisk-size", 
                "node-vm-size", 
                "nodepool-name", 
                "pod-cidr", 
                "service-cidr", 
                "service-principal", 
                "skip-subnet-role-assignment", 
                "ssh-key-value", 
                "tags", 
                "vnet-subnet-id", 
                "workspace-resource-id"
            ]
        }, 
        "remove-dev-spaces": {
            "$args": [
                "name", 
                "resource-group", 
                "yes"
            ]
        }, 
        "list": {
            "$args": [
                "resource-group"
            ]
        }, 
        "enable-addons": {
            "$args": [
                "addons", 
                "name", 
                "resource-group", 
                "no-wait", 
                "workspace-resource-id"
            ]
        }, 
        "disable-addons": {
            "$args": [
                "addons", 
                "name", 
                "resource-group", 
                "no-wait"
            ]
        }, 
        "upgrade": {
            "$args": [
                "kubernetes-version", 
                "name", 
                "resource-group", 
                "no-wait", 
                "yes"
            ]
        }, 
        "use-dev-spaces": {
            "$args": [
                "name", 
                "resource-group", 
                "space", 
                "update", 
                "yes"
            ]
        }, 
        "get-credentials": {
            "$args": [
                "name", 
                "resource-group", 
                "admin", 
                "file"
            ]
        }, 
        "install-cli": {
            "$args": [
                "client-version", 
                "install-location"
            ]
        }, 
        "wait": {
            "$args": [
                "name", 
                "resource-group", 
                "created", 
                "custom", 
                "deleted", 
                "exists", 
                "interval", 
                "timeout", 
                "updated"
            ]
        }, 
        "upgrade-connector": {
            "$args": [
                "name", 
                "resource-group", 
                "aci-resource-group", 
                "chart-url", 
                "client-secret", 
                "connector-name", 
                "image-tag", 
                "location", 
                "os-type", 
                "service-principal"
            ]
        }, 
        "remove-connector": {
            "$args": [
                "name", 
                "resource-group", 
                "connector-name", 
                "graceful", 
                "location", 
                "os-type"
            ]
        }, 
        "delete": {
            "$args": [
                "name", 
                "resource-group", 
                "no-wait", 
                "yes"
            ]
        }
    }, 
    "functionapp": {
        "show": {
            "$args": [
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "stop": {
            "$args": [
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "create": {
            "$args": [
                "name", 
                "resource-group", 
                "storage-account", 
                "consumption-plan-location", 
                "deployment-container-image-name", 
                "deployment-local-git", 
                "deployment-source-branch", 
                "deployment-source-url", 
                "os-type", 
                "plan", 
                "runtime", 
                "tags"
            ]
        }, 
        "cors": {
            "add": {
                "$args": [
                    "allowed-origins", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "remove": {
                "$args": [
                    "allowed-origins", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "show": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "list": {
            "$args": [
                "resource-group"
            ]
        }, 
        "update": {
            "$args": [
                "add", 
                "force-string", 
                "remove", 
                "set", 
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "start": {
            "$args": [
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "restart": {
            "$args": [
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "deployment": {
            "source": {
                "show": {
                    "$args": [
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "config-zip": {
                    "$args": [
                        "src", 
                        "timeout", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "sync": {
                    "$args": [
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "update-token": {
                    "$args": [
                        "git-token"
                    ]
                }, 
                "config-local-git": {
                    "$args": [
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "config": {
                    "$args": [
                        "repo-url", 
                        "branch", 
                        "git-token", 
                        "manual-integration", 
                        "repository-type", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription", 
                        "app-working-dir", 
                        "cd-account-create", 
                        "cd-app-type", 
                        "cd-project-url", 
                        "nodejs-task-runner", 
                        "private-repo-password", 
                        "private-repo-username", 
                        "python-framework", 
                        "python-version", 
                        "slot-swap", 
                        "test"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }
            }, 
            "user": {
                "set": {
                    "$args": [
                        "user-name", 
                        "password"
                    ]
                }, 
                "show": {
                    
                }
            }, 
            "list-publishing-profiles": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "list-consumption-locations": {
            
        }, 
        "config": {
            "show": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "appsettings": {
                "set": {
                    "$args": [
                        "settings", 
                        "slot-settings", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "list": {
                    "$args": [
                        "name", 
                        "resource-group"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "setting-names", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }
            }, 
            "hostname": {
                "add": {
                    "$args": [
                        "hostname", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "list": {
                    "$args": [
                        "resource-group", 
                        "webapp-name"
                    ]
                }, 
                "get-external-ip": {
                    "$args": [
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "hostname", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }
            }, 
            "set": {
                "$args": [
                    "always-on", 
                    "auto-heal-enabled", 
                    "ftps-state", 
                    "http20-enabled", 
                    "java-container", 
                    "java-container-version", 
                    "java-version", 
                    "linux-fx-version", 
                    "min-tls-version", 
                    "net-framework-version", 
                    "php-version", 
                    "python-version", 
                    "remote-debugging-enabled", 
                    "startup-file", 
                    "use-32bit-worker-process", 
                    "web-sockets-enabled", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "ssl": {
                "bind": {
                    "$args": [
                        "certificate-thumbprint", 
                        "ssl-type", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "unbind": {
                    "$args": [
                        "certificate-thumbprint", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "list": {
                    "$args": [
                        "resource-group"
                    ]
                }, 
                "upload": {
                    "$args": [
                        "certificate-file", 
                        "certificate-password", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "certificate-thumbprint", 
                        "resource-group"
                    ]
                }
            }
        }, 
        "identity": {
            "assign": {
                "$args": [
                    "role", 
                    "scope", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "remove": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "show": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "delete": {
            "$args": [
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }
    }, 
    "bot": {
        "prepare-publish": {
            "$args": [
                "name", 
                "proj-name", 
                "resource-group", 
                "sln-name", 
                "code-dir"
            ]
        }, 
        "directline": {
            "create": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "add-disabled", 
                    "disablev1", 
                    "disablev3", 
                    "site-name"
                ]
            }, 
            "show": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "with-secrets"
                ]
            }, 
            "delete": {
                "$args": [
                    "name", 
                    "resource-group"
                ]
            }
        }, 
        "authsetting": {
            "show": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "setting-name"
                ]
            }, 
            "create": {
                "$args": [
                    "client-id", 
                    "client-secret", 
                    "name", 
                    "provider-scope-string", 
                    "resource-group", 
                    "service", 
                    "setting-name", 
                    "parameters"
                ]
            }, 
            "list-providers": {
                "$args": [
                    "provider-name"
                ]
            }, 
            "list": {
                "$args": [
                    "name", 
                    "resource-group"
                ]
            }, 
            "delete": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "setting-name"
                ]
            }
        }, 
        "show": {
            "$args": [
                "name", 
                "resource-group"
            ]
        }, 
        "telegram": {
            "create": {
                "$args": [
                    "access-token", 
                    "name", 
                    "resource-group", 
                    "add-disabled", 
                    "is-validated"
                ]
            }, 
            "show": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "with-secrets"
                ]
            }, 
            "delete": {
                "$args": [
                    "name", 
                    "resource-group"
                ]
            }
        }, 
        "create": {
            "$args": [
                "kind", 
                "name", 
                "resource-group", 
                "appid", 
                "location", 
                "password", 
                "tags", 
                "description", 
                "display-name", 
                "endpoint", 
                "sku", 
                "insights-location", 
                "lang", 
                "storage", 
                "version"
            ]
        }, 
        "sms": {
            "create": {
                "$args": [
                    "account-sid", 
                    "auth-token", 
                    "name", 
                    "phone", 
                    "resource-group", 
                    "add-disabled", 
                    "is-validated"
                ]
            }, 
            "show": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "with-secrets"
                ]
            }, 
            "delete": {
                "$args": [
                    "name", 
                    "resource-group"
                ]
            }
        }, 
        "update": {
            "$args": [
                "name", 
                "resource-group", 
                "add", 
                "force-string", 
                "remove", 
                "set"
            ]
        }, 
        "publish": {
            "$args": [
                "name", 
                "resource-group", 
                "code-dir"
            ]
        }, 
        "webchat": {
            "show": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "with-secrets"
                ]
            }
        }, 
        "kik": {
            "create": {
                "$args": [
                    "key", 
                    "name", 
                    "resource-group", 
                    "user-name", 
                    "add-disabled", 
                    "is-validated"
                ]
            }, 
            "show": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "with-secrets"
                ]
            }, 
            "delete": {
                "$args": [
                    "name", 
                    "resource-group"
                ]
            }
        }, 
        "facebook": {
            "create": {
                "$args": [
                    "appid", 
                    "name", 
                    "page-id", 
                    "resource-group", 
                    "secret", 
                    "token", 
                    "add-disabled"
                ]
            }, 
            "show": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "with-secrets"
                ]
            }, 
            "delete": {
                "$args": [
                    "name", 
                    "resource-group"
                ]
            }
        }, 
        "skype": {
            "create": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "add-disabled", 
                    "calling-web-hook", 
                    "enable-calling", 
                    "enable-groups", 
                    "enable-media-cards", 
                    "enable-messaging", 
                    "enable-screen-sharing", 
                    "enable-video", 
                    "groups-mode"
                ]
            }, 
            "show": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "with-secrets"
                ]
            }, 
            "delete": {
                "$args": [
                    "name", 
                    "resource-group"
                ]
            }
        }, 
        "download": {
            "$args": [
                "name", 
                "resource-group", 
                "save-path"
            ]
        }, 
        "msteams": {
            "create": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "add-disabled", 
                    "calling-web-hook", 
                    "enable-calling"
                ]
            }, 
            "show": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "with-secrets"
                ]
            }, 
            "delete": {
                "$args": [
                    "name", 
                    "resource-group"
                ]
            }
        }, 
        "delete": {
            "$args": [
                "name", 
                "resource-group"
            ]
        }, 
        "email": {
            "create": {
                "$args": [
                    "email-address", 
                    "name", 
                    "password", 
                    "resource-group", 
                    "add-disabled"
                ]
            }, 
            "show": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "with-secrets"
                ]
            }, 
            "delete": {
                "$args": [
                    "name", 
                    "resource-group"
                ]
            }
        }, 
        "slack": {
            "create": {
                "$args": [
                    "client-id", 
                    "client-secret", 
                    "name", 
                    "resource-group", 
                    "verification-token", 
                    "add-disabled", 
                    "landing-page-url"
                ]
            }, 
            "show": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "with-secrets"
                ]
            }, 
            "delete": {
                "$args": [
                    "name", 
                    "resource-group"
                ]
            }
        }
    }, 
    "batch": {
        "node": {
            "remote-login-settings": {
                "show": {
                    "$args": [
                        "node-id", 
                        "pool-id", 
                        "account-endpoint", 
                        "account-key", 
                        "account-name"
                    ]
                }
            }, 
            "remote-desktop": {
                "download": {
                    "$args": [
                        "destination", 
                        "node-id", 
                        "pool-id", 
                        "account-endpoint", 
                        "account-key", 
                        "account-name"
                    ]
                }
            }, 
            "show": {
                "$args": [
                    "node-id", 
                    "pool-id", 
                    "account-endpoint", 
                    "account-key", 
                    "account-name", 
                    "select"
                ]
            }, 
            "list": {
                "$args": [
                    "pool-id", 
                    "account-endpoint", 
                    "account-key", 
                    "account-name", 
                    "filter", 
                    "select"
                ]
            }, 
            "reboot": {
                "$args": [
                    "node-id", 
                    "pool-id", 
                    "node-reboot-option", 
                    "account-endpoint", 
                    "account-key", 
                    "account-name"
                ]
            }, 
            "service-logs": {
                "upload": {
                    "$args": [
                        "node-id", 
                        "pool-id", 
                        "json-file", 
                        "account-endpoint", 
                        "account-key", 
                        "account-name", 
                        "container-url", 
                        "end-time", 
                        "start-time"
                    ]
                }
            }, 
            "user": {
                "reset": {
                    "$args": [
                        "node-id", 
                        "pool-id", 
                        "user-name", 
                        "json-file", 
                        "account-endpoint", 
                        "account-key", 
                        "account-name", 
                        "expiry-time", 
                        "password", 
                        "ssh-public-key"
                    ]
                }, 
                "create": {
                    "$args": [
                        "node-id", 
                        "pool-id", 
                        "json-file", 
                        "account-endpoint", 
                        "account-key", 
                        "account-name", 
                        "expiry-time", 
                        "is-admin", 
                        "name", 
                        "password", 
                        "ssh-public-key"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "node-id", 
                        "pool-id", 
                        "user-name", 
                        "yes", 
                        "account-endpoint", 
                        "account-key", 
                        "account-name"
                    ]
                }
            }, 
            "file": {
                "download": {
                    "$args": [
                        "destination", 
                        "file-path", 
                        "node-id", 
                        "pool-id", 
                        "account-endpoint", 
                        "account-key", 
                        "account-name", 
                        "end-range", 
                        "if-modified-since", 
                        "if-unmodified-since", 
                        "start-range"
                    ]
                }, 
                "show": {
                    "$args": [
                        "file-path", 
                        "node-id", 
                        "pool-id", 
                        "account-endpoint", 
                        "account-key", 
                        "account-name", 
                        "if-modified-since", 
                        "if-unmodified-since"
                    ]
                }, 
                "list": {
                    "$args": [
                        "node-id", 
                        "pool-id", 
                        "recursive", 
                        "account-endpoint", 
                        "account-key", 
                        "account-name", 
                        "filter"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "file-path", 
                        "node-id", 
                        "pool-id", 
                        "recursive", 
                        "yes", 
                        "account-endpoint", 
                        "account-key", 
                        "account-name"
                    ]
                }
            }, 
            "scheduling": {
                "enable": {
                    "$args": [
                        "node-id", 
                        "pool-id", 
                        "account-endpoint", 
                        "account-key", 
                        "account-name"
                    ]
                }, 
                "disable": {
                    "$args": [
                        "node-id", 
                        "pool-id", 
                        "node-disable-scheduling-option", 
                        "account-endpoint", 
                        "account-key", 
                        "account-name"
                    ]
                }
            }, 
            "reimage": {
                "$args": [
                    "node-id", 
                    "pool-id", 
                    "node-reimage-option", 
                    "account-endpoint", 
                    "account-key", 
                    "account-name"
                ]
            }, 
            "delete": {
                "$args": [
                    "pool-id", 
                    "json-file", 
                    "account-endpoint", 
                    "account-key", 
                    "account-name", 
                    "node-deallocation-option", 
                    "node-list", 
                    "resize-timeout", 
                    "if-match", 
                    "if-modified-since", 
                    "if-none-match", 
                    "if-unmodified-since"
                ]
            }
        }, 
        "account": {
            "set": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "storage-account", 
                    "tags"
                ]
            }, 
            "show": {
                "$args": [
                    "name", 
                    "resource-group"
                ]
            }, 
            "keys": {
                "renew": {
                    "$args": [
                        "key-name", 
                        "name", 
                        "resource-group"
                    ]
                }, 
                "list": {
                    "$args": [
                        "name", 
                        "resource-group"
                    ]
                }
            }, 
            "autostorage-keys": {
                "sync": {
                    "$args": [
                        "name", 
                        "resource-group"
                    ]
                }
            }, 
            "create": {
                "$args": [
                    "location", 
                    "name", 
                    "resource-group", 
                    "keyvault", 
                    "no-wait", 
                    "storage-account", 
                    "tags"
                ]
            }, 
            "list": {
                "$args": [
                    "resource-group"
                ]
            }, 
            "login": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "shared-key-auth", 
                    "show"
                ]
            }, 
            "delete": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "no-wait", 
                    "yes"
                ]
            }
        }, 
        "task": {
            "reset": {
                "$args": [
                    "job-id", 
                    "task-id", 
                    "json-file", 
                    "account-endpoint", 
                    "account-key", 
                    "account-name", 
                    "max-task-retry-count", 
                    "max-wall-clock-time", 
                    "retention-time", 
                    "if-match", 
                    "if-modified-since", 
                    "if-none-match", 
                    "if-unmodified-since"
                ]
            }, 
            "reactivate": {
                "$args": [
                    "job-id", 
                    "task-id", 
                    "account-endpoint", 
                    "account-key", 
                    "account-name", 
                    "if-match", 
                    "if-modified-since", 
                    "if-none-match", 
                    "if-unmodified-since"
                ]
            }, 
            "show": {
                "$args": [
                    "job-id", 
                    "task-id", 
                    "account-endpoint", 
                    "account-key", 
                    "account-name", 
                    "expand", 
                    "if-match", 
                    "if-modified-since", 
                    "if-none-match", 
                    "if-unmodified-since", 
                    "select"
                ]
            }, 
            "stop": {
                "$args": [
                    "job-id", 
                    "task-id", 
                    "account-endpoint", 
                    "account-key", 
                    "account-name", 
                    "if-match", 
                    "if-modified-since", 
                    "if-none-match", 
                    "if-unmodified-since"
                ]
            }, 
            "create": {
                "$args": [
                    "job-id", 
                    "affinity-id", 
                    "application-package-references", 
                    "command-line", 
                    "environment-settings", 
                    "json-file", 
                    "max-task-retry-count", 
                    "max-wall-clock-time", 
                    "resource-files", 
                    "retention-time", 
                    "task-id", 
                    "account-endpoint", 
                    "account-key", 
                    "account-name"
                ]
            }, 
            "list": {
                "$args": [
                    "job-id", 
                    "account-endpoint", 
                    "account-key", 
                    "account-name", 
                    "expand", 
                    "filter", 
                    "select"
                ]
            }, 
            "subtask": {
                "list": {
                    "$args": [
                        "job-id", 
                        "task-id", 
                        "account-endpoint", 
                        "account-key", 
                        "account-name", 
                        "select"
                    ]
                }
            }, 
            "file": {
                "download": {
                    "$args": [
                        "destination", 
                        "file-path", 
                        "job-id", 
                        "task-id", 
                        "account-endpoint", 
                        "account-key", 
                        "account-name", 
                        "end-range", 
                        "if-modified-since", 
                        "if-unmodified-since", 
                        "start-range"
                    ]
                }, 
                "show": {
                    "$args": [
                        "file-path", 
                        "job-id", 
                        "task-id", 
                        "account-endpoint", 
                        "account-key", 
                        "account-name", 
                        "if-modified-since", 
                        "if-unmodified-since"
                    ]
                }, 
                "list": {
                    "$args": [
                        "job-id", 
                        "task-id", 
                        "recursive", 
                        "account-endpoint", 
                        "account-key", 
                        "account-name", 
                        "filter"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "file-path", 
                        "job-id", 
                        "task-id", 
                        "recursive", 
                        "yes", 
                        "account-endpoint", 
                        "account-key", 
                        "account-name"
                    ]
                }
            }, 
            "delete": {
                "$args": [
                    "job-id", 
                    "task-id", 
                    "yes", 
                    "account-endpoint", 
                    "account-key", 
                    "account-name", 
                    "if-match", 
                    "if-modified-since", 
                    "if-none-match", 
                    "if-unmodified-since"
                ]
            }
        }, 
        "certificate": {
            "create": {
                "$args": [
                    "certificate-file", 
                    "thumbprint", 
                    "password", 
                    "account-endpoint", 
                    "account-key", 
                    "account-name"
                ]
            }, 
            "show": {
                "$args": [
                    "thumbprint", 
                    "account-endpoint", 
                    "account-key", 
                    "account-name", 
                    "select"
                ]
            }, 
            "list": {
                "$args": [
                    "account-endpoint", 
                    "account-key", 
                    "account-name", 
                    "filter", 
                    "select"
                ]
            }, 
            "delete": {
                "$args": [
                    "thumbprint", 
                    "abort", 
                    "yes", 
                    "account-endpoint", 
                    "account-key", 
                    "account-name"
                ]
            }
        }, 
        "application": {
            "set": {
                "$args": [
                    "application-id", 
                    "name", 
                    "resource-group", 
                    "allow-updates", 
                    "default-version", 
                    "display-name"
                ]
            }, 
            "package": {
                "show": {
                    "$args": [
                        "application-id", 
                        "name", 
                        "resource-group", 
                        "version"
                    ]
                }, 
                "create": {
                    "$args": [
                        "application-id", 
                        "name", 
                        "package-file", 
                        "resource-group", 
                        "version"
                    ]
                }, 
                "activate": {
                    "$args": [
                        "application-id", 
                        "format", 
                        "name", 
                        "resource-group", 
                        "version"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "application-id", 
                        "name", 
                        "resource-group", 
                        "version", 
                        "yes"
                    ]
                }
            }, 
            "create": {
                "$args": [
                    "application-id", 
                    "name", 
                    "resource-group", 
                    "allow-updates", 
                    "display-name"
                ]
            }, 
            "show": {
                "$args": [
                    "application-id", 
                    "name", 
                    "resource-group"
                ]
            }, 
            "list": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "maxresults"
                ]
            }, 
            "summary": {
                "list": {
                    "$args": [
                        "account-endpoint", 
                        "account-key", 
                        "account-name"
                    ]
                }, 
                "show": {
                    "$args": [
                        "application-id", 
                        "account-endpoint", 
                        "account-key", 
                        "account-name"
                    ]
                }
            }, 
            "delete": {
                "$args": [
                    "application-id", 
                    "name", 
                    "resource-group", 
                    "yes"
                ]
            }
        }, 
        "job": {
            "reset": {
                "$args": [
                    "job-id", 
                    "json-file", 
                    "account-endpoint", 
                    "account-key", 
                    "account-name", 
                    "metadata", 
                    "on-all-tasks-complete", 
                    "priority", 
                    "job-max-task-retry-count", 
                    "job-max-wall-clock-time", 
                    "pool-id", 
                    "if-match", 
                    "if-modified-since", 
                    "if-none-match", 
                    "if-unmodified-since"
                ]
            }, 
            "enable": {
                "$args": [
                    "job-id", 
                    "account-endpoint", 
                    "account-key", 
                    "account-name", 
                    "if-match", 
                    "if-modified-since", 
                    "if-none-match", 
                    "if-unmodified-since"
                ]
            }, 
            "set": {
                "$args": [
                    "job-id", 
                    "json-file", 
                    "account-endpoint", 
                    "account-key", 
                    "account-name", 
                    "metadata", 
                    "on-all-tasks-complete", 
                    "priority", 
                    "job-max-task-retry-count", 
                    "job-max-wall-clock-time", 
                    "pool-id", 
                    "if-match", 
                    "if-modified-since", 
                    "if-none-match", 
                    "if-unmodified-since"
                ]
            }, 
            "show": {
                "$args": [
                    "job-id", 
                    "account-endpoint", 
                    "account-key", 
                    "account-name", 
                    "expand", 
                    "if-match", 
                    "if-modified-since", 
                    "if-none-match", 
                    "if-unmodified-since", 
                    "select"
                ]
            }, 
            "stop": {
                "$args": [
                    "job-id", 
                    "terminate-reason", 
                    "account-endpoint", 
                    "account-key", 
                    "account-name", 
                    "if-match", 
                    "if-modified-since", 
                    "if-none-match", 
                    "if-unmodified-since"
                ]
            }, 
            "create": {
                "$args": [
                    "json-file", 
                    "account-endpoint", 
                    "account-key", 
                    "account-name", 
                    "id", 
                    "metadata", 
                    "priority", 
                    "uses-task-dependencies", 
                    "job-max-task-retry-count", 
                    "job-max-wall-clock-time", 
                    "job-manager-task-command-line", 
                    "job-manager-task-environment-settings", 
                    "job-manager-task-id", 
                    "job-manager-task-resource-files", 
                    "pool-id"
                ]
            }, 
            "list": {
                "$args": [
                    "job-schedule-id", 
                    "account-endpoint", 
                    "account-key", 
                    "account-name", 
                    "expand", 
                    "filter", 
                    "select"
                ]
            }, 
            "prep-release-status": {
                "list": {
                    "$args": [
                        "job-id", 
                        "account-endpoint", 
                        "account-key", 
                        "account-name", 
                        "filter", 
                        "select"
                    ]
                }
            }, 
            "all-statistics": {
                "show": {
                    "$args": [
                        "account-endpoint", 
                        "account-key", 
                        "account-name"
                    ]
                }
            }, 
            "disable": {
                "$args": [
                    "job-id", 
                    "disable-tasks", 
                    "account-endpoint", 
                    "account-key", 
                    "account-name", 
                    "if-match", 
                    "if-modified-since", 
                    "if-none-match", 
                    "if-unmodified-since"
                ]
            }, 
            "delete": {
                "$args": [
                    "job-id", 
                    "yes", 
                    "account-endpoint", 
                    "account-key", 
                    "account-name", 
                    "if-match", 
                    "if-modified-since", 
                    "if-none-match", 
                    "if-unmodified-since"
                ]
            }, 
            "task-counts": {
                "show": {
                    "$args": [
                        "job-id", 
                        "account-endpoint", 
                        "account-key", 
                        "account-name"
                    ]
                }
            }
        }, 
        "location": {
            "quotas": {
                "show": {
                    "$args": [
                        "location"
                    ]
                }
            }
        }, 
        "job-schedule": {
            "reset": {
                "$args": [
                    "job-schedule-id", 
                    "json-file", 
                    "account-endpoint", 
                    "account-key", 
                    "account-name", 
                    "metadata", 
                    "job-metadata", 
                    "on-all-tasks-complete", 
                    "priority", 
                    "uses-task-dependencies", 
                    "job-manager-task-application-package-references", 
                    "job-manager-task-command-line", 
                    "job-manager-task-environment-settings", 
                    "job-manager-task-id", 
                    "job-manager-task-resource-files", 
                    "pool-id", 
                    "do-not-run-after", 
                    "do-not-run-until", 
                    "recurrence-interval", 
                    "start-window", 
                    "if-match", 
                    "if-modified-since", 
                    "if-none-match", 
                    "if-unmodified-since"
                ]
            }, 
            "enable": {
                "$args": [
                    "job-schedule-id", 
                    "account-endpoint", 
                    "account-key", 
                    "account-name", 
                    "if-match", 
                    "if-modified-since", 
                    "if-none-match", 
                    "if-unmodified-since"
                ]
            }, 
            "set": {
                "$args": [
                    "job-schedule-id", 
                    "json-file", 
                    "account-endpoint", 
                    "account-key", 
                    "account-name", 
                    "metadata", 
                    "job-metadata", 
                    "on-all-tasks-complete", 
                    "priority", 
                    "uses-task-dependencies", 
                    "job-manager-task-application-package-references", 
                    "job-manager-task-command-line", 
                    "job-manager-task-environment-settings", 
                    "job-manager-task-id", 
                    "job-manager-task-resource-files", 
                    "pool-id", 
                    "do-not-run-after", 
                    "do-not-run-until", 
                    "recurrence-interval", 
                    "start-window", 
                    "if-match", 
                    "if-modified-since", 
                    "if-none-match", 
                    "if-unmodified-since"
                ]
            }, 
            "show": {
                "$args": [
                    "job-schedule-id", 
                    "account-endpoint", 
                    "account-key", 
                    "account-name", 
                    "expand", 
                    "if-match", 
                    "if-modified-since", 
                    "if-none-match", 
                    "if-unmodified-since", 
                    "select"
                ]
            }, 
            "stop": {
                "$args": [
                    "job-schedule-id", 
                    "account-endpoint", 
                    "account-key", 
                    "account-name", 
                    "if-match", 
                    "if-modified-since", 
                    "if-none-match", 
                    "if-unmodified-since"
                ]
            }, 
            "create": {
                "$args": [
                    "json-file", 
                    "account-endpoint", 
                    "account-key", 
                    "account-name", 
                    "id", 
                    "metadata", 
                    "on-all-tasks-complete", 
                    "priority", 
                    "uses-task-dependencies", 
                    "job-max-task-retry-count", 
                    "job-max-wall-clock-time", 
                    "job-manager-task-command-line", 
                    "job-manager-task-id", 
                    "job-manager-task-resource-files", 
                    "pool-id", 
                    "do-not-run-after", 
                    "do-not-run-until", 
                    "recurrence-interval", 
                    "start-window"
                ]
            }, 
            "list": {
                "$args": [
                    "account-endpoint", 
                    "account-key", 
                    "account-name", 
                    "expand", 
                    "filter", 
                    "select"
                ]
            }, 
            "disable": {
                "$args": [
                    "job-schedule-id", 
                    "account-endpoint", 
                    "account-key", 
                    "account-name", 
                    "if-match", 
                    "if-modified-since", 
                    "if-none-match", 
                    "if-unmodified-since"
                ]
            }, 
            "delete": {
                "$args": [
                    "job-schedule-id", 
                    "yes", 
                    "account-endpoint", 
                    "account-key", 
                    "account-name", 
                    "if-match", 
                    "if-modified-since", 
                    "if-none-match", 
                    "if-unmodified-since"
                ]
            }
        }, 
        "pool": {
            "reset": {
                "$args": [
                    "pool-id", 
                    "json-file", 
                    "account-endpoint", 
                    "account-key", 
                    "account-name", 
                    "application-package-references", 
                    "certificate-references", 
                    "metadata", 
                    "start-task-command-line", 
                    "start-task-environment-settings", 
                    "start-task-max-task-retry-count", 
                    "start-task-wait-for-success"
                ]
            }, 
            "set": {
                "$args": [
                    "pool-id", 
                    "json-file", 
                    "account-endpoint", 
                    "account-key", 
                    "account-name", 
                    "application-package-references", 
                    "certificate-references", 
                    "metadata", 
                    "start-task-command-line", 
                    "start-task-environment-settings", 
                    "start-task-max-task-retry-count", 
                    "start-task-resource-files", 
                    "start-task-wait-for-success", 
                    "if-match", 
                    "if-modified-since", 
                    "if-none-match", 
                    "if-unmodified-since"
                ]
            }, 
            "autoscale": {
                "evaluate": {
                    "$args": [
                        "auto-scale-formula", 
                        "pool-id", 
                        "account-endpoint", 
                        "account-key", 
                        "account-name"
                    ]
                }, 
                "enable": {
                    "$args": [
                        "pool-id", 
                        "auto-scale-evaluation-interval", 
                        "auto-scale-formula", 
                        "account-endpoint", 
                        "account-key", 
                        "account-name", 
                        "if-match", 
                        "if-modified-since", 
                        "if-none-match", 
                        "if-unmodified-since"
                    ]
                }, 
                "disable": {
                    "$args": [
                        "pool-id", 
                        "account-endpoint", 
                        "account-key", 
                        "account-name"
                    ]
                }
            }, 
            "show": {
                "$args": [
                    "pool-id", 
                    "account-endpoint", 
                    "account-key", 
                    "account-name", 
                    "expand", 
                    "if-match", 
                    "if-modified-since", 
                    "if-none-match", 
                    "if-unmodified-since", 
                    "select"
                ]
            }, 
            "list": {
                "$args": [
                    "account-endpoint", 
                    "account-key", 
                    "account-name", 
                    "expand", 
                    "filter", 
                    "select"
                ]
            }, 
            "node-counts": {
                "list": {
                    "$args": [
                        "account-endpoint", 
                        "account-key", 
                        "account-name", 
                        "filter"
                    ]
                }
            }, 
            "node-agent-skus": {
                "list": {
                    "$args": [
                        "account-endpoint", 
                        "account-key", 
                        "account-name", 
                        "filter"
                    ]
                }
            }, 
            "all-statistics": {
                "show": {
                    "$args": [
                        "account-endpoint", 
                        "account-key", 
                        "account-name"
                    ]
                }
            }, 
            "usage-metrics": {
                "list": {
                    "$args": [
                        "account-endpoint", 
                        "account-key", 
                        "account-name", 
                        "end-time", 
                        "filter", 
                        "start-time"
                    ]
                }
            }, 
            "create          : create a batch pool in an account. when creating a pool, choose __a": {
                "$args": [
                    "json-file", 
                    "account-endpoint", 
                    "account-key", 
                    "account-name", 
                    "application-licenses", 
                    "application-package-references", 
                    "auto-scale-formula", 
                    "certificate-references", 
                    "enable-inter-node-communication", 
                    "id", 
                    "max-tasks-per-node", 
                    "metadata", 
                    "resize-timeout", 
                    "target-dedicated-nodes", 
                    "target-low-priority-nodes", 
                    "vm-size", 
                    "os-family", 
                    "start-task-command-line", 
                    "start-task-resource-files", 
                    "start-task-wait-for-success", 
                    "image", 
                    "node-agent-sku-id"
                ]
            }, 
            "os": {
                "upgrade": {
                    "$args": [
                        "pool-id", 
                        "target-os-version", 
                        "account-endpoint", 
                        "account-key", 
                        "account-name", 
                        "if-match", 
                        "if-modified-since", 
                        "if-none-match", 
                        "if-unmodified-since"
                    ]
                }
            }, 
            "resize": {
                "$args": [
                    "pool-id", 
                    "abort", 
                    "node-deallocation-option", 
                    "resize-timeout", 
                    "target-dedicated-nodes", 
                    "target-low-priority-nodes", 
                    "account-endpoint", 
                    "account-key", 
                    "account-name", 
                    "if-match", 
                    "if-modified-since", 
                    "if-none-match", 
                    "if-unmodified-since"
                ]
            }, 
            "delete": {
                "$args": [
                    "pool-id", 
                    "yes", 
                    "account-endpoint", 
                    "account-key", 
                    "account-name", 
                    "if-match", 
                    "if-modified-since", 
                    "if-none-match", 
                    "if-unmodified-since"
                ]
            }
        }
    }, 
    "acs": {
        "scale": {
            "$args": [
                "name", 
                "resource-group"
            ]
        }, 
        "kubernetes": {
            "browse": {
                "$args": [
                    "name", 
                    "disable-browser"
                ]
            }, 
            "get-credentials": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "file", 
                    "ssh-key-file"
                ]
            }, 
            "install-cli": {
                "$args": [
                    "client-version", 
                    "install-location"
                ]
            }
        }, 
        "show": {
            "$args": [
                "name", 
                "resource-group"
            ]
        }, 
        "browse": {
            "$args": [
                "name", 
                "disable-browser", 
                "ssh-key-file"
            ]
        }, 
        "create": {
            "$args": [
                "name", 
                "resource-group", 
                "admin-password", 
                "admin-username", 
                "agent-count", 
                "agent-osdisk-size", 
                "agent-ports", 
                "agent-profiles", 
                "agent-storage-profile", 
                "agent-vm-size", 
                "agent-vnet-subnet-id", 
                "api-version", 
                "dns-prefix", 
                "generate-ssh-keys", 
                "location", 
                "master-count", 
                "master-first-consecutive-static-ip", 
                "master-osdisk-size", 
                "master-profile", 
                "master-storage-profile", 
                "master-vm-size", 
                "master-vnet-subnet-id", 
                "no-wait", 
                "orchestrator-type", 
                "orchestrator-version", 
                "ssh-key-value", 
                "tags", 
                "validate", 
                "windows"
            ]
        }, 
        "list": {
            "$args": [
                "resource-group"
            ]
        }, 
        "dcos": {
            "browse": {
                "$args": [
                    "name", 
                    "disable-browser", 
                    "ssh-key-file"
                ]
            }, 
            "install-cli": {
                "$args": [
                    "client-version", 
                    "install-location"
                ]
            }
        }, 
        "list-locations": {
            
        }, 
        "wait": {
            "$args": [
                "name", 
                "resource-group", 
                "created", 
                "custom", 
                "deleted", 
                "exists", 
                "interval", 
                "timeout", 
                "updated"
            ]
        }, 
        "delete": {
            "$args": [
                "name", 
                "resource-group", 
                "yes"
            ]
        }
    }, 
    "acr": {
        "credential": {
            "renew": {
                "$args": [
                    "name", 
                    "password-name", 
                    "resource-group"
                ]
            }, 
            "show": {
                "$args": [
                    "name", 
                    "resource-group"
                ]
            }
        }, 
        "task": {
            "update-run": {
                "$args": [
                    "registry", 
                    "run-id", 
                    "no-archive", 
                    "resource-group"
                ]
            }, 
            "run": {
                "$args": [
                    "name", 
                    "registry", 
                    "no-logs", 
                    "no-wait", 
                    "resource-group", 
                    "set", 
                    "set-secret"
                ]
            }, 
            "logs": {
                "$args": [
                    "registry", 
                    "image", 
                    "name", 
                    "resource-group", 
                    "run-id"
                ]
            }, 
            "show": {
                "$args": [
                    "name", 
                    "registry", 
                    "resource-group", 
                    "with-secure-properties"
                ]
            }, 
            "create": {
                "$args": [
                    "context", 
                    "file", 
                    "name", 
                    "registry", 
                    "arg", 
                    "base-image-trigger-enabled", 
                    "base-image-trigger-name", 
                    "base-image-trigger-type", 
                    "branch", 
                    "commit-trigger-enabled", 
                    "cpu", 
                    "git-access-token", 
                    "image", 
                    "no-cache", 
                    "no-push", 
                    "os", 
                    "pull-request-trigger-enabled", 
                    "resource-group", 
                    "secret-arg", 
                    "set", 
                    "set-secret", 
                    "source-trigger-name", 
                    "status", 
                    "timeout", 
                    "values"
                ]
            }, 
            "show-run": {
                "$args": [
                    "registry", 
                    "run-id", 
                    "resource-group"
                ]
            }, 
            "list": {
                "$args": [
                    "registry", 
                    "resource-group"
                ]
            }, 
            "update": {
                "$args": [
                    "name", 
                    "registry", 
                    "arg", 
                    "base-image-trigger-enabled", 
                    "base-image-trigger-type", 
                    "branch", 
                    "commit-trigger-enabled", 
                    "context", 
                    "cpu", 
                    "file", 
                    "git-access-token", 
                    "image", 
                    "no-cache", 
                    "no-push", 
                    "os", 
                    "pull-request-trigger-enabled", 
                    "resource-group", 
                    "secret-arg", 
                    "set", 
                    "set-secret", 
                    "status", 
                    "timeout", 
                    "values"
                ]
            }, 
            "list-runs": {
                "$args": [
                    "registry", 
                    "image", 
                    "name", 
                    "resource-group", 
                    "run-status", 
                    "top"
                ]
            }, 
            "cancel-run": {
                "$args": [
                    "registry", 
                    "run-id", 
                    "resource-group"
                ]
            }, 
            "delete": {
                "$args": [
                    "name", 
                    "registry", 
                    "resource-group"
                ]
            }
        }, 
        "run": {
            "$args": [
                "registry", 
                "file", 
                "no-format", 
                "no-logs", 
                "no-wait", 
                "os", 
                "resource-group", 
                "set", 
                "set-secret", 
                "timeout", 
                "values"
            ]
        }, 
        "repository": {
            "show": {
                "$args": [
                    "name", 
                    "image", 
                    "password", 
                    "repository", 
                    "resource-group", 
                    "username"
                ]
            }, 
            "list": {
                "$args": [
                    "name", 
                    "password", 
                    "resource-group", 
                    "top", 
                    "username"
                ]
            }, 
            "update": {
                "$args": [
                    "name", 
                    "delete-enabled", 
                    "image", 
                    "list-enabled", 
                    "password", 
                    "read-enabled", 
                    "repository", 
                    "resource-group", 
                    "username", 
                    "write-enabled"
                ]
            }, 
            "show-tags": {
                "$args": [
                    "name", 
                    "repository", 
                    "detail", 
                    "orderby", 
                    "password", 
                    "resource-group", 
                    "top", 
                    "username"
                ]
            }, 
            "show-manifests": {
                "$args": [
                    "name", 
                    "repository", 
                    "detail", 
                    "orderby", 
                    "password", 
                    "resource-group", 
                    "top", 
                    "username"
                ]
            }, 
            "untag": {
                "$args": [
                    "image", 
                    "name", 
                    "password", 
                    "resource-group", 
                    "username"
                ]
            }, 
            "delete": {
                "$args": [
                    "name", 
                    "image", 
                    "password", 
                    "repository", 
                    "resource-group", 
                    "username", 
                    "yes"
                ]
            }
        }, 
        "show": {
            "$args": [
                "name", 
                "resource-group"
            ]
        }, 
        "list": {
            "$args": [
                "resource-group"
            ]
        }, 
        "create": {
            "$args": [
                "name", 
                "resource-group", 
                "sku", 
                "admin-enabled", 
                "location", 
                "storage-account-name"
            ]
        }, 
        "webhook": {
            "get-config": {
                "$args": [
                    "name", 
                    "registry", 
                    "resource-group"
                ]
            }, 
            "show": {
                "$args": [
                    "name", 
                    "registry", 
                    "resource-group"
                ]
            }, 
            "list": {
                "$args": [
                    "registry", 
                    "resource-group"
                ]
            }, 
            "create": {
                "$args": [
                    "actions", 
                    "name", 
                    "registry", 
                    "uri", 
                    "headers", 
                    "location", 
                    "resource-group", 
                    "scope", 
                    "status", 
                    "tags"
                ]
            }, 
            "ping": {
                "$args": [
                    "name", 
                    "registry", 
                    "resource-group"
                ]
            }, 
            "update": {
                "$args": [
                    "name", 
                    "registry", 
                    "actions", 
                    "headers", 
                    "resource-group", 
                    "scope", 
                    "status", 
                    "tags", 
                    "uri", 
                    "add", 
                    "force-string", 
                    "remove", 
                    "set"
                ]
            }, 
            "list-events": {
                "$args": [
                    "name", 
                    "registry", 
                    "resource-group"
                ]
            }, 
            "delete": {
                "$args": [
                    "name", 
                    "registry", 
                    "resource-group"
                ]
            }
        }, 
        "update": {
            "$args": [
                "name", 
                "admin-enabled", 
                "resource-group", 
                "sku", 
                "storage-account-name", 
                "tags", 
                "add", 
                "force-string", 
                "remove", 
                "set"
            ]
        }, 
        "check-name": {
            "$args": [
                "name"
            ]
        }, 
        "replication": {
            "create": {
                "$args": [
                    "location", 
                    "registry", 
                    "name", 
                    "resource-group", 
                    "tags"
                ]
            }, 
            "show": {
                "$args": [
                    "name", 
                    "registry", 
                    "resource-group"
                ]
            }, 
            "list": {
                "$args": [
                    "registry", 
                    "resource-group"
                ]
            }, 
            "update": {
                "$args": [
                    "name", 
                    "registry", 
                    "resource-group", 
                    "tags", 
                    "add", 
                    "force-string", 
                    "remove", 
                    "set"
                ]
            }, 
            "delete": {
                "$args": [
                    "name", 
                    "registry", 
                    "resource-group"
                ]
            }
        }, 
        "build": {
            "$args": [
                "registry", 
                "build-arg", 
                "file", 
                "image", 
                "no-format", 
                "no-logs", 
                "no-push", 
                "os", 
                "resource-group", 
                "secret-build-arg", 
                "timeout"
            ]
        }, 
        "helm": {
            "repo": {
                "add": {
                    "$args": [
                        "name", 
                        "password", 
                        "username"
                    ]
                }
            }, 
            "push": {
                "$args": [
                    "name", 
                    "force", 
                    "password", 
                    "username"
                ]
            }, 
            "show": {
                "$args": [
                    "name", 
                    "password", 
                    "username", 
                    "version"
                ]
            }, 
            "list": {
                "$args": [
                    "name", 
                    "password", 
                    "username"
                ]
            }, 
            "delete": {
                "$args": [
                    "name", 
                    "password", 
                    "prov", 
                    "username", 
                    "version", 
                    "yes"
                ]
            }
        }, 
        "import": {
            "$args": [
                "name", 
                "source", 
                "force", 
                "image", 
                "registry", 
                "repository", 
                "resource-group"
            ]
        }, 
        "login": {
            "$args": [
                "name", 
                "password", 
                "resource-group", 
                "username"
            ]
        }, 
        "show-usage": {
            "$args": [
                "name", 
                "resource-group"
            ]
        }, 
        "config": {
            "content-trust": {
                "update": {
                    "$args": [
                        "name", 
                        "resource-group", 
                        "status"
                    ]
                }, 
                "show": {
                    "$args": [
                        "name", 
                        "resource-group"
                    ]
                }
            }
        }, 
        "delete": {
            "$args": [
                "name", 
                "resource-group"
            ]
        }
    }, 
    "dms": {
        "show": {
            "$args": [
                "name", 
                "resource-group"
            ]
        }, 
        "stop": {
            "$args": [
                "name", 
                "resource-group", 
                "no-wait"
            ]
        }, 
        "create": {
            "$args": [
                "location", 
                "name", 
                "resource-group", 
                "sku-name", 
                "subnet", 
                "no-wait", 
                "tags"
            ]
        }, 
        "list": {
            "$args": [
                "resource-group"
            ]
        }, 
        "check-name": {
            "$args": [
                "location", 
                "name"
            ]
        }, 
        "check-status": {
            "$args": [
                "name", 
                "resource-group"
            ]
        }, 
        "project": {
            "task": {
                "show": {
                    "$args": [
                        "name", 
                        "project-name", 
                        "resource-group", 
                        "service-name", 
                        "expand"
                    ]
                }, 
                "create": {
                    "$args": [
                        "database-options-json", 
                        "name", 
                        "project-name", 
                        "resource-group", 
                        "service-name", 
                        "source-connection-json", 
                        "target-connection-json", 
                        "enable-data-integrity-validation", 
                        "enable-query-analysis-validation", 
                        "enable-schema-validation"
                    ]
                }, 
                "list": {
                    "$args": [
                        "project-name", 
                        "resource-group", 
                        "service-name", 
                        "task-type"
                    ]
                }, 
                "check-name": {
                    "$args": [
                        "name", 
                        "project-name", 
                        "resource-group", 
                        "service-name"
                    ]
                }, 
                "cancel": {
                    "$args": [
                        "name", 
                        "project-name", 
                        "resource-group", 
                        "service-name"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "name", 
                        "project-name", 
                        "resource-group", 
                        "service-name", 
                        "delete-running-tasks", 
                        "yes"
                    ]
                }
            }, 
            "show": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "service-name"
                ]
            }, 
            "create": {
                "$args": [
                    "location", 
                    "name", 
                    "resource-group", 
                    "service-name", 
                    "source-platform", 
                    "target-platform", 
                    "tags"
                ]
            }, 
            "list": {
                "$args": [
                    "resource-group", 
                    "service-name"
                ]
            }, 
            "check-name": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "service-name"
                ]
            }, 
            "delete": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "service-name", 
                    "delete-running-tasks", 
                    "yes"
                ]
            }
        }, 
        "start": {
            "$args": [
                "name", 
                "resource-group", 
                "no-wait"
            ]
        }, 
        "list-skus": {
            
        }, 
        "wait": {
            "$args": [
                "name", 
                "resource-group", 
                "created", 
                "custom", 
                "deleted", 
                "exists", 
                "interval", 
                "timeout", 
                "updated"
            ]
        }, 
        "delete": {
            "$args": [
                "name", 
                "resource-group", 
                "delete-running-tasks", 
                "no-wait", 
                "yes"
            ]
        }
    }, 
    "snapshot": {
        "show": {
            "$args": [
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "create": {
            "$args": [
                "name", 
                "resource-group", 
                "location", 
                "no-wait", 
                "size-gb", 
                "sku", 
                "source", 
                "source-storage-account-id", 
                "tags"
            ]
        }, 
        "list": {
            "$args": [
                "resource-group"
            ]
        }, 
        "update": {
            "$args": [
                "no-wait", 
                "sku", 
                "add", 
                "force-string", 
                "remove", 
                "set", 
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "revoke-access": {
            "$args": [
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "grant-access": {
            "$args": [
                "duration-in-seconds", 
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }, 
        "wait": {
            "$args": [
                "ids", 
                "name", 
                "resource-group", 
                "subscription", 
                "created", 
                "custom", 
                "deleted", 
                "exists", 
                "interval", 
                "timeout", 
                "updated"
            ]
        }, 
        "delete": {
            "$args": [
                "ids", 
                "name", 
                "resource-group", 
                "subscription"
            ]
        }
    }, 
    "signalr": {
        "create": {
            "$args": [
                "name", 
                "resource-group", 
                "sku", 
                "location", 
                "tags", 
                "unit-count"
            ]
        }, 
        "show": {
            "$args": [
                "name", 
                "resource-group"
            ]
        }, 
        "list": {
            "$args": [
                "resource-group"
            ]
        }, 
        "key": {
            "renew": {
                "$args": [
                    "key-type", 
                    "name", 
                    "resource-group"
                ]
            }, 
            "list": {
                "$args": [
                    "name", 
                    "resource-group"
                ]
            }
        }, 
        "delete": {
            "$args": [
                "name", 
                "resource-group"
            ]
        }
    }, 
    "sql": {
        "elastic-pool": {
            "list-dbs": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "server", 
                    "subscription"
                ]
            }, 
            "show": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "server", 
                    "subscription"
                ]
            }, 
            "create": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "server", 
                    "db-dtu-max", 
                    "db-dtu-min", 
                    "license-type", 
                    "max-size", 
                    "no-wait", 
                    "tags", 
                    "zone-redundant", 
                    "capacity", 
                    "edition", 
                    "family"
                ]
            }, 
            "list": {
                "$args": [
                    "skip", 
                    "ids", 
                    "resource-group", 
                    "server", 
                    "subscription"
                ]
            }, 
            "update": {
                "$args": [
                    "db-dtu-max", 
                    "db-dtu-min", 
                    "max-size", 
                    "no-wait", 
                    "zone-redundant", 
                    "add", 
                    "force-string", 
                    "remove", 
                    "set", 
                    "capacity", 
                    "edition", 
                    "family", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "server", 
                    "subscription"
                ]
            }, 
            "list-editions": {
                "$args": [
                    "location", 
                    "available", 
                    "show-details", 
                    "dtu", 
                    "edition", 
                    "vcores"
                ]
            }, 
            "op": {
                "cancel": {
                    "$args": [
                        "name", 
                        "elastic-pool", 
                        "ids", 
                        "resource-group", 
                        "server", 
                        "subscription"
                    ]
                }, 
                "list": {
                    "$args": [
                        "elastic-pool", 
                        "ids", 
                        "resource-group", 
                        "server", 
                        "subscription"
                    ]
                }
            }, 
            "delete": {
                "$args": [
                    "no-wait", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "server", 
                    "subscription"
                ]
            }
        }, 
        "list-usages": {
            "$args": [
                "location"
            ]
        }, 
        "midb": {
            "restore": {
                "$args": [
                    "dest-name", 
                    "dest-mi", 
                    "dest-resource-group", 
                    "no-wait", 
                    "ids", 
                    "managed-instance", 
                    "name", 
                    "resource-group", 
                    "subscription", 
                    "time"
                ]
            }, 
            "create": {
                "$args": [
                    "managed-instance", 
                    "name", 
                    "resource-group", 
                    "collation", 
                    "no-wait"
                ]
            }, 
            "show": {
                "$args": [
                    "ids", 
                    "managed-instance", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "list": {
                "$args": [
                    "managed-instance", 
                    "resource-group"
                ]
            }, 
            "delete": {
                "$args": [
                    "no-wait", 
                    "yes", 
                    "ids", 
                    "managed-instance", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "mi": {
            "create": {
                "$args": [
                    "admin-password", 
                    "admin-user", 
                    "location", 
                    "name", 
                    "resource-group", 
                    "subnet", 
                    "assign-identity", 
                    "capacity", 
                    "license-type", 
                    "no-wait", 
                    "storage", 
                    "vnet-name", 
                    "edition", 
                    "family"
                ]
            }, 
            "show": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "list": {
                "$args": [
                    "resource-group"
                ]
            }, 
            "update": {
                "$args": [
                    "admin-password", 
                    "assign-identity", 
                    "capacity", 
                    "license-type", 
                    "no-wait", 
                    "storage", 
                    "add", 
                    "force-string", 
                    "remove", 
                    "set", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "delete": {
                "$args": [
                    "no-wait", 
                    "yes", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }, 
        "server": {
            "list-usages": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "show": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "create": {
                "$args": [
                    "admin-password", 
                    "admin-user", 
                    "location", 
                    "name", 
                    "resource-group", 
                    "assign-identity"
                ]
            }, 
            "vnet-rule": {
                "create": {
                    "$args": [
                        "name", 
                        "resource-group", 
                        "server", 
                        "subnet", 
                        "ignore-missing-endpoint", 
                        "vnet-name"
                    ]
                }, 
                "show": {
                    "$args": [
                        "name", 
                        "ids", 
                        "resource-group", 
                        "server", 
                        "subscription"
                    ]
                }, 
                "list": {
                    "$args": [
                        "ids", 
                        "resource-group", 
                        "server", 
                        "subscription"
                    ]
                }, 
                "update": {
                    "$args": [
                        "name", 
                        "subnet", 
                        "ignore-missing-endpoint", 
                        "add", 
                        "force-string", 
                        "remove", 
                        "set", 
                        "ids", 
                        "resource-group", 
                        "server", 
                        "subscription"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "name", 
                        "ids", 
                        "resource-group", 
                        "server", 
                        "subscription"
                    ]
                }
            }, 
            "list": {
                "$args": [
                    "resource-group"
                ]
            }, 
            "ad-admin": {
                "create": {
                    "$args": [
                        "display-name", 
                        "object-id", 
                        "resource-group", 
                        "server"
                    ]
                }, 
                "list": {
                    "$args": [
                        "ids", 
                        "resource-group", 
                        "server", 
                        "subscription"
                    ]
                }, 
                "update": {
                    "$args": [
                        "display-name", 
                        "object-id", 
                        "add", 
                        "force-string", 
                        "remove", 
                        "set", 
                        "ids", 
                        "resource-group", 
                        "server", 
                        "subscription"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "ids", 
                        "resource-group", 
                        "server", 
                        "subscription"
                    ]
                }
            }, 
            "update": {
                "$args": [
                    "admin-password", 
                    "assign_identity", 
                    "add", 
                    "force-string", 
                    "remove", 
                    "set", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "tde-key": {
                "set": {
                    "$args": [
                        "server-key-type", 
                        "kid", 
                        "ids", 
                        "resource-group", 
                        "server", 
                        "subscription"
                    ]
                }, 
                "show": {
                    "$args": [
                        "ids", 
                        "resource-group", 
                        "server", 
                        "subscription"
                    ]
                }
            }, 
            "key": {
                "create": {
                    "$args": [
                        "kid", 
                        "resource-group", 
                        "server"
                    ]
                }, 
                "show": {
                    "$args": [
                        "kid", 
                        "ids", 
                        "resource-group", 
                        "server", 
                        "subscription"
                    ]
                }, 
                "list": {
                    "$args": [
                        "ids", 
                        "resource-group", 
                        "server", 
                        "subscription"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "kid", 
                        "ids", 
                        "resource-group", 
                        "server", 
                        "subscription"
                    ]
                }
            }, 
            "conn-policy": {
                "update": {
                    "$args": [
                        "connection-type", 
                        "add", 
                        "force-string", 
                        "remove", 
                        "set", 
                        "ids", 
                        "resource-group", 
                        "server", 
                        "subscription"
                    ]
                }, 
                "show": {
                    "$args": [
                        "ids", 
                        "resource-group", 
                        "server", 
                        "subscription"
                    ]
                }
            }, 
            "delete": {
                "$args": [
                    "yes", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "firewall-rule": {
                "create": {
                    "$args": [
                        "end-ip-address", 
                        "name", 
                        "resource-group", 
                        "server", 
                        "start-ip-address"
                    ]
                }, 
                "show": {
                    "$args": [
                        "ids", 
                        "name", 
                        "resource-group", 
                        "server", 
                        "subscription"
                    ]
                }, 
                "list": {
                    "$args": [
                        "ids", 
                        "resource-group", 
                        "server", 
                        "subscription"
                    ]
                }, 
                "update": {
                    "$args": [
                        "end-ip-address", 
                        "start-ip-address", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "server", 
                        "subscription"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "ids", 
                        "name", 
                        "resource-group", 
                        "server", 
                        "subscription"
                    ]
                }
            }, 
            "dns-alias": {
                "show": {
                    "$args": [
                        "name", 
                        "ids", 
                        "resource-group", 
                        "server", 
                        "subscription"
                    ]
                }, 
                "create": {
                    "$args": [
                        "name", 
                        "resource-group", 
                        "server"
                    ]
                }, 
                "set": {
                    "$args": [
                        "original-server", 
                        "ids", 
                        "resource-group", 
                        "server", 
                        "subscription"
                    ]
                }, 
                "list": {
                    "$args": [
                        "ids", 
                        "resource-group", 
                        "server", 
                        "subscription"
                    ]
                }, 
                "delete": {
                    "$args": [
                        "name", 
                        "ids", 
                        "resource-group", 
                        "server", 
                        "subscription"
                    ]
                }
            }
        }, 
        "db": {
            "rename": {
                "$args": [
                    "new-name", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "server", 
                    "subscription"
                ]
            }, 
            "restore": {
                "$args": [
                    "dest-name", 
                    "license-type", 
                    "no-wait", 
                    "tags", 
                    "zone-redundant", 
                    "capacity", 
                    "edition", 
                    "family", 
                    "elastic-pool", 
                    "service-objective", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "server", 
                    "subscription", 
                    "deleted-time", 
                    "time"
                ]
            }, 
            "delete": {
                "$args": [
                    "no-wait", 
                    "yes", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "server", 
                    "subscription"
                ]
            }, 
            "audit-policy": {
                "update": {
                    "$args": [
                        "add", 
                        "force-string", 
                        "remove", 
                        "set", 
                        "actions", 
                        "retention-days", 
                        "state", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "server", 
                        "subscription", 
                        "storage-account", 
                        "storage-endpoint", 
                        "storage-key"
                    ]
                }, 
                "show": {
                    "$args": [
                        "ids", 
                        "name", 
                        "resource-group", 
                        "server", 
                        "subscription"
                    ]
                }
            }, 
            "show": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "server", 
                    "subscription"
                ]
            }, 
            "create": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "server", 
                    "license-type", 
                    "max-size", 
                    "no-wait", 
                    "tags", 
                    "zone-redundant", 
                    "catalog-collation", 
                    "collation", 
                    "sample-name", 
                    "capacity", 
                    "edition", 
                    "family", 
                    "elastic-pool", 
                    "service-objective"
                ]
            }, 
            "list": {
                "$args": [
                    "elastic-pool", 
                    "ids", 
                    "resource-group", 
                    "server", 
                    "subscription"
                ]
            }, 
            "update": {
                "$args": [
                    "max-size", 
                    "no-wait", 
                    "zone-redundant", 
                    "add", 
                    "force-string", 
                    "remove", 
                    "set", 
                    "capacity", 
                    "edition", 
                    "family", 
                    "elastic-pool", 
                    "service-objective", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "server", 
                    "subscription"
                ]
            }, 
            "tde": {
                "show": {
                    "$args": [
                        "database", 
                        "ids", 
                        "resource-group", 
                        "server", 
                        "subscription"
                    ]
                }, 
                "set": {
                    "$args": [
                        "status", 
                        "database", 
                        "ids", 
                        "resource-group", 
                        "server", 
                        "subscription"
                    ]
                }, 
                "list-activity": {
                    "$args": [
                        "database", 
                        "ids", 
                        "resource-group", 
                        "server", 
                        "subscription"
                    ]
                }
            }, 
            "show-connection-string": {
                "$args": [
                    "client", 
                    "auth-type", 
                    "ids", 
                    "name", 
                    "server", 
                    "subscription"
                ]
            }, 
            "replica": {
                "list-links": {
                    "$args": [
                        "ids", 
                        "name", 
                        "resource-group", 
                        "server", 
                        "subscription"
                    ]
                }, 
                "create": {
                    "$args": [
                        "name", 
                        "partner-server", 
                        "resource-group", 
                        "server", 
                        "license-type", 
                        "no-wait", 
                        "partner-resource-group", 
                        "tags", 
                        "zone-redundant", 
                        "capacity", 
                        "family", 
                        "elastic-pool", 
                        "service-objective"
                    ]
                }, 
                "delete-link": {
                    "$args": [
                        "partner-server", 
                        "partner-resource-group", 
                        "yes", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "server", 
                        "subscription"
                    ]
                }, 
                "set-primary": {
                    "$args": [
                        "allow-data-loss", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "server", 
                        "subscription"
                    ]
                }
            }, 
            "export": {
                "$args": [
                    "admin-password", 
                    "admin-user", 
                    "storage-key", 
                    "storage-key-type", 
                    "storage-uri", 
                    "auth-type", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "server", 
                    "subscription"
                ]
            }, 
            "list-usages": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "server", 
                    "subscription"
                ]
            }, 
            "list-editions": {
                "$args": [
                    "location", 
                    "available", 
                    "show-details", 
                    "dtu", 
                    "edition", 
                    "service-objective", 
                    "vcores"
                ]
            }, 
            "list-deleted": {
                "$args": [
                    "ids", 
                    "resource-group", 
                    "server", 
                    "subscription"
                ]
            }, 
            "import": {
                "$args": [
                    "admin-password", 
                    "admin-user", 
                    "storage-key", 
                    "storage-key-type", 
                    "storage-uri", 
                    "auth-type", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "server", 
                    "subscription"
                ]
            }, 
            "copy": {
                "$args": [
                    "dest-name", 
                    "dest-resource-group", 
                    "dest-server", 
                    "license-type", 
                    "no-wait", 
                    "tags", 
                    "zone-redundant", 
                    "capacity", 
                    "family", 
                    "elastic-pool", 
                    "service-objective", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "server", 
                    "subscription"
                ]
            }, 
            "threat-policy": {
                "update": {
                    "$args": [
                        "add", 
                        "force-string", 
                        "remove", 
                        "set", 
                        "email-account-admins", 
                        "email-addresses", 
                        "disabled-alerts", 
                        "retention-days", 
                        "state", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "server", 
                        "subscription", 
                        "storage-account", 
                        "storage-endpoint", 
                        "storage-key"
                    ]
                }, 
                "show": {
                    "$args": [
                        "ids", 
                        "name", 
                        "resource-group", 
                        "server", 
                        "subscription"
                    ]
                }
            }, 
            "op": {
                "cancel": {
                    "$args": [
                        "name", 
                        "database", 
                        "ids", 
                        "resource-group", 
                        "server", 
                        "subscription"
                    ]
                }, 
                "list": {
                    "$args": [
                        "database", 
                        "ids", 
                        "resource-group", 
                        "server", 
                        "subscription"
                    ]
                }
            }
        }, 
        "failover-group": {
            "set-primary": {
                "$args": [
                    "name", 
                    "ids", 
                    "resource-group", 
                    "server", 
                    "subscription"
                ]
            }, 
            "show": {
                "$args": [
                    "name", 
                    "ids", 
                    "resource-group", 
                    "server", 
                    "subscription"
                ]
            }, 
            "create": {
                "$args": [
                    "name", 
                    "partner-server", 
                    "resource-group", 
                    "server", 
                    "add-db", 
                    "failover-policy", 
                    "grace-period", 
                    "partner-resource-group"
                ]
            }, 
            "list": {
                "$args": [
                    "ids", 
                    "resource-group", 
                    "server", 
                    "subscription"
                ]
            }, 
            "update": {
                "$args": [
                    "name", 
                    "add-db", 
                    "failover-policy", 
                    "grace-period", 
                    "remove-db", 
                    "add", 
                    "force-string", 
                    "remove", 
                    "set", 
                    "ids", 
                    "resource-group", 
                    "server", 
                    "subscription"
                ]
            }, 
            "delete": {
                "$args": [
                    "name", 
                    "ids", 
                    "resource-group", 
                    "server", 
                    "subscription"
                ]
            }
        }, 
        "dw": {
            "pause": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "server", 
                    "subscription"
                ]
            }, 
            "show": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "server", 
                    "subscription"
                ]
            }, 
            "create": {
                "$args": [
                    "name", 
                    "resource-group", 
                    "server", 
                    "collation", 
                    "max-size", 
                    "no-wait", 
                    "tags", 
                    "zone-redundant", 
                    "service-objective"
                ]
            }, 
            "resume": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "server", 
                    "subscription"
                ]
            }, 
            "list": {
                "$args": [
                    "ids", 
                    "resource-group", 
                    "server", 
                    "subscription"
                ]
            }, 
            "update": {
                "$args": [
                    "max-size", 
                    "no-wait", 
                    "service-objective", 
                    "add", 
                    "force-string", 
                    "remove", 
                    "set", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "server", 
                    "subscription"
                ]
            }, 
            "delete": {
                "$args": [
                    "no-wait", 
                    "yes", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "server", 
                    "subscription"
                ]
            }
        }, 
        "show-usage": {
            "$args": [
                "location", 
                "usage"
            ]
        }
    }, 
    "login": {
        "$args": [
            "allow-no-subscriptions", 
            "password", 
            "service-principal", 
            "tenant", 
            "use-cert-sn-issuer", 
            "use-device-code", 
            "username", 
            "identity"
        ]
    }, 
    "backup": {
        "recoverypoint": {
            "list": {
                "$args": [
                    "container-name", 
                    "item-name", 
                    "resource-group", 
                    "vault-name", 
                    "end-date", 
                    "start-date"
                ]
            }, 
            "show": {
                "$args": [
                    "container-name", 
                    "item-name", 
                    "name", 
                    "ids", 
                    "resource-group", 
                    "subscription", 
                    "vault-name"
                ]
            }
        }, 
        "restore": {
            "files": {
                "unmount-rp": {
                    "$args": [
                        "container-name", 
                        "item-name", 
                        "rp-name", 
                        "ids", 
                        "resource-group", 
                        "subscription", 
                        "vault-name"
                    ]
                }, 
                "mount-rp": {
                    "$args": [
                        "container-name", 
                        "item-name", 
                        "rp-name", 
                        "ids", 
                        "resource-group", 
                        "subscription", 
                        "vault-name"
                    ]
                }
            }, 
            "restore-disks": {
                "$args": [
                    "container-name", 
                    "item-name", 
                    "rp-name", 
                    "storage-account", 
                    "restore-to-staging-storage-account", 
                    "ids", 
                    "resource-group", 
                    "subscription", 
                    "vault-name"
                ]
            }
        }, 
        "container": {
            "list": {
                "$args": [
                    "resource-group", 
                    "vault-name"
                ]
            }, 
            "show": {
                "$args": [
                    "name", 
                    "ids", 
                    "resource-group", 
                    "subscription", 
                    "vault-name"
                ]
            }
        }, 
        "item": {
            "set-policy": {
                "$args": [
                    "container-name", 
                    "policy-name", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription", 
                    "vault-name"
                ]
            }, 
            "list": {
                "$args": [
                    "resource-group", 
                    "vault-name", 
                    "container-name"
                ]
            }, 
            "show": {
                "$args": [
                    "container-name", 
                    "name", 
                    "ids", 
                    "resource-group", 
                    "subscription", 
                    "vault-name"
                ]
            }
        }, 
        "job": {
            "stop": {
                "$args": [
                    "name", 
                    "ids", 
                    "resource-group", 
                    "subscription", 
                    "vault-name"
                ]
            }, 
            "wait": {
                "$args": [
                    "name", 
                    "timeout", 
                    "ids", 
                    "resource-group", 
                    "subscription", 
                    "vault-name"
                ]
            }, 
            "list": {
                "$args": [
                    "resource-group", 
                    "vault-name", 
                    "end-date", 
                    "operation", 
                    "start-date", 
                    "status"
                ]
            }, 
            "show": {
                "$args": [
                    "name", 
                    "ids", 
                    "resource-group", 
                    "subscription", 
                    "vault-name"
                ]
            }
        }, 
        "protection": {
            "enable-for-vm": {
                "$args": [
                    "policy-name", 
                    "vm", 
                    "ids", 
                    "resource-group", 
                    "subscription", 
                    "vault-name"
                ]
            }, 
            "backup-now": {
                "$args": [
                    "container-name", 
                    "item-name", 
                    "retain-until", 
                    "ids", 
                    "resource-group", 
                    "subscription", 
                    "vault-name"
                ]
            }, 
            "disable": {
                "$args": [
                    "container-name", 
                    "item-name", 
                    "delete-backup-data", 
                    "yes", 
                    "ids", 
                    "resource-group", 
                    "subscription", 
                    "vault-name"
                ]
            }, 
            "check-vm": {
                "$args": [
                    "vm-id"
                ]
            }
        }, 
        "policy": {
            "set": {
                "$args": [
                    "policy", 
                    "ids", 
                    "resource-group", 
                    "subscription", 
                    "vault-name"
                ]
            }, 
            "show": {
                "$args": [
                    "name", 
                    "ids", 
                    "resource-group", 
                    "subscription", 
                    "vault-name"
                ]
            }, 
            "list-associated-items": {
                "$args": [
                    "name", 
                    "ids", 
                    "resource-group", 
                    "subscription", 
                    "vault-name"
                ]
            }, 
            "list": {
                "$args": [
                    "resource-group", 
                    "vault-name"
                ]
            }, 
            "get-default-for-vm": {
                "$args": [
                    "ids", 
                    "resource-group", 
                    "subscription", 
                    "vault-name"
                ]
            }, 
            "delete": {
                "$args": [
                    "name", 
                    "ids", 
                    "resource-group", 
                    "subscription", 
                    "vault-name"
                ]
            }
        }, 
        "vault": {
            "backup-properties": {
                "set": {
                    "$args": [
                        "backup-storage-redundancy", 
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }, 
                "show": {
                    "$args": [
                        "ids", 
                        "name", 
                        "resource-group", 
                        "subscription"
                    ]
                }
            }, 
            "create": {
                "$args": [
                    "location", 
                    "name", 
                    "resource-group"
                ]
            }, 
            "show": {
                "$args": [
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }, 
            "list": {
                "$args": [
                    "resource-group"
                ]
            }, 
            "delete": {
                "$args": [
                    "force", 
                    "yes", 
                    "ids", 
                    "name", 
                    "resource-group", 
                    "subscription"
                ]
            }
        }
    }, 
    "sf": {
        "application": {
            "certificate": {
                "add": {
                    "$args": [
                        "cluster-name", 
                        "resource-group", 
                        "certificate-file", 
                        "certificate-output-folder", 
                        "certificate-password", 
                        "certificate-subject-name", 
                        "secret-identifier", 
                        "vault-name", 
                        "vault-resource-group"
                    ]
                }
            }
        }, 
        "cluster": {
            "node": {
                "add": {
                    "$args": [
                        "cluster-name", 
                        "node-type", 
                        "number-of-nodes-to-add", 
                        "resource-group"
                    ]
                }, 
                "remove": {
                    "$args": [
                        "cluster-name", 
                        "node-type", 
                        "number-of-nodes-to-remove", 
                        "resource-group"
                    ]
                }
            }, 
            "node-type": {
                "add": {
                    "$args": [
                        "cluster-name", 
                        "node-type", 
                        "resource-group", 
                        "vm-password", 
                        "vm-user-name", 
                        "durability-level", 
                        "vm-sku", 
                        "vm-tier"
                    ]
                }
            }, 
            "upgrade-type": {
                "set": {
                    "$args": [
                        "cluster-name", 
                        "resource-group", 
                        "upgrade-mode", 
                        "version"
                    ]
                }
            }, 
            "certificate": {
                "add": {
                    "$args": [
                        "cluster-name", 
                        "resource-group", 
                        "certificate-file", 
                        "certificate-output-folder", 
                        "certificate-password", 
                        "certificate-subject-name", 
                        "secret-identifier", 
                        "vault-name", 
                        "vault-resource-group"
                    ]
                }, 
                "remove": {
                    "$args": [
                        "cluster-name", 
                        "resource-group", 
                        "thumbprint"
                    ]
                }
            }, 
            "durability": {
                "update": {
                    "$args": [
                        "cluster-name", 
                        "durability-level", 
                        "node-type", 
                        "resource-group"
                    ]
                }
            }, 
            "client-certificate": {
                "add": {
                    "$args": [
                        "cluster-name", 
                        "resource-group", 
                        "admin-client-thumbprints", 
                        "certificate-common-name", 
                        "certificate-issuer-thumbprint", 
                        "client-certificate-common-names", 
                        "is-admin", 
                        "readonly-client-thumbprints", 
                        "thumbprint"
                    ]
                }, 
                "remove": {
                    "$args": [
                        "cluster-name", 
                        "resource-group", 
                        "certificate-common-name", 
                        "certificate-issuer-thumbprint", 
                        "client-certificate-common-names", 
                        "thumbprints"
                    ]
                }
            }, 
            "create": {
                "$args": [
                    "location", 
                    "resource-group", 
                    "certificate-file", 
                    "certificate-output-folder", 
                    "certificate-password", 
                    "certificate-subject-name", 
                    "cluster-name", 
                    "cluster-size", 
                    "os", 
                    "parameter-file", 
                    "secret-identifier", 
                    "template-file", 
                    "vault-name", 
                    "vault-resource-group", 
                    "vm-password", 
                    "vm-sku", 
                    "vm-user-name"
                ]
            }, 
            "show": {
                "$args": [
                    "cluster-name", 
                    "resource-group"
                ]
            }, 
            "list": {
                "$args": [
                    "resource-group"
                ]
            }, 
            "reliability": {
                "update": {
                    "$args": [
                        "cluster-name", 
                        "reliability-level", 
                        "resource-group", 
                        "auto-add-node"
                    ]
                }
            }, 
            "setting": {
                "set": {
                    "$args": [
                        "cluster-name", 
                        "resource-group", 
                        "parameter", 
                        "section", 
                        "settings-section-description", 
                        "value"
                    ]
                }, 
                "remove": {
                    "$args": [
                        "cluster-name", 
                        "resource-group", 
                        "parameter", 
                        "section", 
                        "settings-section-description"
                    ]
                }
            }
        }
    }, 
    "interactive": {
        "$args": [
            "style", 
            "update"
        ]
    }
}

export { azcmdmap };