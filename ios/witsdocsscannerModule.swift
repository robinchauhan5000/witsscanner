//
//  witsdocsscannerModule.swift
//  witsdocsscannerModule
//
//  Copyright © 2022 Robin Chauhan. All rights reserved.
//

import Foundation

@objc(witsdocsscannerModule)
class witsdocsscannerModule: NSObject {
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return ["count": 1]
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
