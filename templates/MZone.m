//
//  MZone.m
//  Wigo
//
//  Created by Luis Perez Ramirez on 27/10/15.
//  Copyright © 2015 Juan Granados. All rights reserved.
//

#import "MZone.h"

@implementation MZone



-(id)initWithSSID:(NSString *)SSID
      hotSpotName:(NSString *)hotSpotName
       macAddress:(NSString *)macAddress
             city:(NSString *)city
         province:(NSString *)province
              zip:(NSString *)zip
    countryPrefix:(NSString *)countryPrefix
wisprLocationName:(NSString *)wisprLocationName
  wisprLocationID:(NSString *)wisprLocationID
         latitude:(NSString *)latitude
        longitude:(NSString *)longitude
  hotSpotCategory:(NSString *)hotSpotCategory
         urlWispr:(NSString *)urlWispr
      mainHotSpot:(NSString *)mainHotSpot
      zoneProfile:(NSString *)zoneProfile
    checkInternet:(NSString *)checkInternet
      landingPage:(NSString *)landingPage {
    
    self = [super init];
    if (self) {
        self.SSID = SSID ? SSID : @"";
        self.hotSpotName = hotSpotName ? hotSpotName : @"";
        self.macAddress = macAddress ? macAddress : @"";
        self.city = city ? city : @"";
        self.province = province ? province : @"";
        self.zip = zip ? zip : @"";
        self.countryPrefix = countryPrefix ? countryPrefix : @"";
        self.wisprLocationName = wisprLocationName ? wisprLocationName : @"";
        self.latitude = latitude ? latitude : @"";
        self.longitude = longitude ? longitude : @"";
        self.hotSpotCategory = hotSpotCategory ? hotSpotCategory : @"";
        self.urlWispr = urlWispr ? urlWispr : @"";
        self.mainHotSpot = mainHotSpot ? mainHotSpot : @"";
        self.zoneProfile = zoneProfile ? zoneProfile : @"";
        self.checkInternet = checkInternet ? checkInternet : @"";
        self.landingPage = landingPage ? landingPage : @"";
    
    }
    return self;
}

@end
